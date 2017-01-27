

module.exports = {
    "swagger:post": {
        "prefix": "swagger:post",
        "body": [
            "    /**",
            "     * @swagger",
            "     * /v1/ROUTE:",
            "     *   post:",
            "     *     tags:",
            "     *       - $1s",
            "     *     description: Create $1",
            "     *     produces:",
            "     *       - application/json",
            "     *     parameters:",
            "     *       - name: $1",
            "     *         description: $1 object",
            "     *         in: body",
            "     *         required: true",
            "     *         schema:",
            "     *           \\$ref: '#/definitions/$1'",
            "     *     responses:",
            "     *       201:",
            "     *         description: New $1",
            "     *         schema:",
            "     *           \\$ref: '#/definitions/$1",
            "	 */"
        ]
    },
}