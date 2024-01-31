import Branch from '../models/branch.model';
import Admin from '../models/admin.model';
import Customer from '../models/customer.model';
import Branch_Product from '../models/branch_product.model';
import Product from '../models/product.model';

export const getAllBranch = async (req, res) => {
  try {
    const results = await Branch.findAll({
      include: [
        {
          model: Admin,
          attributes: ['name', 'email', 'image'],
        },
      ],
    });
    res.status(200).send({ result: results });
  } catch (error) {
    res.status(200).send(error.message);
  }
};

export const addBranch = async (req, res) => {
  const data = req?.body;
  try {
    const isNewBranch = await Branch.findAll();
    let head_store = false;
    if (isNewBranch?.length <= 0) {
      head_store = true;
    }
    const branchExist = await Branch.findOne({
      where: { branch_name: data?.branch_name, address: data?.address },
    });
    if (branchExist) {
      return res.status(400).send('Branch already exists');
    }
    await Branch.create({
      branch_name: data?.branch_name,
      longitude: data?.longitude,
      latitude: data?.latitude,
      store_contact: data?.store_contact,
      address: data?.address,
      province_id: data?.province_id,
      city_id: data?.city_id,
      AdminId: data?.AdminId,
      head_store: head_store,
    });
    res.status(200).send('Success created new branch');
  } catch (error) {
    res.status(200).send(error.message);
  }
};

export const getBranchById = async (req, res) => {
  const { id } = req?.params;
  try {
    const results = await Branch.findOne({
      where: { id: id },
      include: [
        {
          model: Admin,
          attributes: ['name', 'email', 'image'],
        },
      ],
    });
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const editBranch = async (req, res) => {
  const data = req?.body;
  try {
    await Branch.update(
      {
        branch_name: data?.branch_name,
        address: data?.address,
        store_contact: data?.store_contact,
        latitude: data?.latitude,
        longitude: data?.longitude,
        province_id: data?.province_id,
        city_id: data?.city_id,
        AdminId: data?.AdminId,
      },
      { where: { id: data?.id } },
    );
    console.log(data);
    res.status(200).send('Success upadate');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteBranch = async (req, res) => {
  console.log(req?.params);
  const { id } = req?.params;
  try {
    await Branch.update({ isDeleted: true }, { where: { id: id } });
    res.status(200).send('Successfully deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getDistanceBranch = async (req, res) => {
  const { lat, lng } = req?.query;
  console.log(req?.query);
  try {
    function haversine(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance;
    }

    function toRad(degrees) {
      return (degrees * Math.PI) / 180;
    }

    function generateRandomRadius() {
      return Math.random() * 5;
    }
    if (lat && lng) {
      const branches = await Branch.findAll();
      const randomRadius = generateRandomRadius();
      const filteredBranches = branches.filter((branch) => {
        const distance = haversine(
          parseFloat(lat),
          parseFloat(lng),
          branch.latitude,
          branch.longitude,
        );
        return distance <= randomRadius;
      });
      console.log(filteredBranches?.length);
      if (filteredBranches?.length >= 1) {
        return res.status(200).send({ branches: filteredBranches[0] });
      } else {
        return res
          .status(400)
          .send(
            'Store doesnt find in your location, please choose different location.',
          );
      }
    } else {
      const results = await Branch.findOne({
        where: { head_store: true },
      });
      return res.status(200).send({ branches: results });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getHeadBranch = async (req, res) => {
  try {
    const results = await Branch.findOne({
      where: { head_store: true },
      include: [{ model: Branch_Product }],
    });
    res.status(200).send({ results });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
