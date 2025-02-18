db.getCollection('centrix.credit-file').insertMany([
    {
      // Centrix Happy Sample
      userId: "72d98645-d459-4aa5-98fa-719b83be40b4",
      provider: "Centrix",
      branch: "NZ",
      pullType: "SOFT_PULL",
      data: {
        // ... existing centrix-happy-sample.json data ...
      },
      createdAt: ISODate("2025-02-04T09:16:29.875+00:00")
    },
    {
      // Centrix Invalid Structure
      userId: "72d98645-d459-4aa5-98fa-719b83be40b4",
      provider: "Centrix",
      branch: "NZ",
      pullType: "SOFT_PULL",
      data: {
        // ... existing centrix-invalid-structure.json data ...
      },
      createdAt: ISODate("2025-02-03T12:45:10.123+00:00")
    },
    {
      // Centrix Zero
      userId: "c57a2fce-c72c-4765-9e53-c0331231239f",
      provider: "Centrix",
      branch: "NZ",
      pullType: "SOFT_PULL",
      data: {
        // ... existing centrix-zero.json data ...
      },
      createdAt: ISODate("2025-02-02T18:30:45.456+00:00")
    }
  ]);