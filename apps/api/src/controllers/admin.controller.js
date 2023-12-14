import Admin from '../models/admin.model';

export const registerAdmin = async (req) => {
    try {
        const { first_name, last_name, username, email, password } = req.body;
        const result = await Admin.create({
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password,
            isVerified: false,
            isSuperAdmin: false,
          });
          return {result}
    } catch (err) {
        return {
            error: err
        }
    }
}

export const getSampleData = async () => {
    return await Sample.findAll();
  };