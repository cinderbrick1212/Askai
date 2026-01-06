exports.profileAdded = (req, res, next) => {
    console.log('Recorded', req.body);
    res.render('host/learn-more', { pageTitle: 'Learn More | Ask.ai' });
};
