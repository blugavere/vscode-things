    /**
     * @swagger
     * /firstPartyOrderEntries:
     *   get:
     *     tags:
     *       - First Party Orders
     *     description: Find all First Party Orders
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: New First Party Order
     *         schema:
     *          type: array
     *          items:
     *              $ref: '#/definitions/FirstPartyOrderEntry'
     */








module.exports = {
    'docs:findAll': {
        'prefix': 'docs:findAll',
        'body': [
            '   docs.add(\'/$1\', docFactory.get()',
            '       .description(\'Find All $1s\')',
            '       .summary(\'Find All\')',
            '       .setModel(\'$1\')',
            '       .idParam()',
            '       .onSuccess(200, {',
            '           description: \'Response\',',
            '           schema: Doc.arrayOf(Doc.model(\'$1\'))',
            '       })',
            '       .build());'
        ]
    },
    'docs:findOne': {
        'prefix': 'docs:findOne',
        'body': [
            '   docs.add(\'/$1/findOne/{id}\', docFactory.get()',
            '       .description(\'Find One $1\')',
            '       .summary(\'Find One\')',
            '       .setModel(\'$1\')',
            '       .idParam()',
            '       .onSuccess(200, {',
            '           description: \'Response\',',
            '           schema: Doc.model(\'$1\')',
            '       })',
            '       .build());'
        ]
    },
    'swagger:findAll': {
        'prefix': 'swagger:post',
        'body': [
            '    /**',
            '     * @swagger',
            '     * /v1/ROUTE:',
            '     *   get:',
            '     *     tags:',
            '     *       - $1s',
            '     *     description: Find All $1s',
            '     *     produces:',
            '     *       - application/json',
            '     *     responses:',
            '     *         200:',
            '     *             description: New $1',
            '     *             schema:',
            '     *                 \\$ref: \'#/definitions/$1',
            '	 */'
        ]
    },
    'swagger:post': {
        'prefix': 'swagger:post',
        'body': [
            '    /**',
            '     * @swagger',
            '     * /v1/ROUTE:',
            '     *   post:',
            '     *     tags:',
            '     *       - $1s',
            '     *     description: Create $1',
            '     *     produces:',
            '     *       - application/json',
            '     *     parameters:',
            '     *       - name: $1',
            '     *         description: $1 object',
            '     *         in: body',
            '     *         required: true',
            '     *         schema:',
            '     *           \\$ref: \'#/definitions/$1\'',
            '     *     responses:',
            '     *       201:',
            '     *         description: New $1',
            '     *         schema:',
            '     *           \\$ref: \'#/definitions/$1',
            '	 */'
        ]
    },
}
;
