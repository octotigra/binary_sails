module.exports = {

    error: function(req, res) {
        return res.badRequest('Some Error');
    },

	visibleError: function(req, res) {
        return res.view( "Ooops" )
    },
};