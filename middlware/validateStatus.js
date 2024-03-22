const validStatuses = (req,res,next) => {
    const { status } = req.body;
    const validStatuses = ['Completed', 'Pending', 'In Progress'];

    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status. Valid statuses are Completed, Pending, In Progress.' });
    }
    next();

};


module.exports = validStatuses;