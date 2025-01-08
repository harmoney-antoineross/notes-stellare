async getCreditMetrics(thirdPartyUserId: string) {
    return await this.creditFile.aggregate([
      {
        $match: { thirdPartyUserId },
      },
      {
        $unwind: '$data.product-data.summary-data.data-block',
      },
      {
        $unwind: '$data.product-data.summary-data.data-block.characteristic',
      },
      {
        $match: {
          'data.product-data.summary-data.data-block.characteristic.variable-name': 'CX0005_ac_op_0m',
        },
      },
      {
        $project: {
          _id: 0,
          name: '$data.product-data.summary-data.data-block.characteristic.variable-name',
          value: {
            $getField: {
              field: { $literal: '$value' },
              input: '$data.product-data.summary-data.data-block.characteristic.value',
            },
          },
        },
      },
    ]);
  }