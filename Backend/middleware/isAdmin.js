export const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "User not authenticated",
      success: false,
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied: Admins only",
      success: false,
    });
  }

  next();
};
