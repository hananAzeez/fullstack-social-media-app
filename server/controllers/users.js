import User from "../models/user";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getUserFrinds = async (req, res) => {
  try {
    const { id } = req.params;
    const user = User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
