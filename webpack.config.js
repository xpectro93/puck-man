module.exports = {
    entry:"./js/puck-man.js",
    output: {
        path:__dirname,
        filename: "bundle.js"
    },
    devtool:"source-map",
    watch:true,
    mode:"development"
};