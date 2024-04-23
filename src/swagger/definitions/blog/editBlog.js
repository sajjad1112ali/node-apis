module.exports = {
  editBlog: {
    type: "object",
    properties: {
      data: {
        type: "object",
        properties: {
          schema: {
            $ref: "#/definitions/blogItems",
          },
        },
      },
    },
  },
};
