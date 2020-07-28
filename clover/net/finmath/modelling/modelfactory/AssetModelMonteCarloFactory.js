var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":251,"id":10031,"methods":[{"el":48,"sc":2,"sl":42},{"el":62,"sc":2,"sl":56},{"el":74,"sc":2,"sl":69},{"el":102,"sc":2,"sl":76}],"name":"AssetModelMonteCarloFactory","sl":28},{"el":148,"id":10073,"methods":[{"el":137,"sc":3,"sl":126},{"el":142,"sc":3,"sl":139},{"el":147,"sc":3,"sl":144}],"name":"AssetModelMonteCarloFactory.BlackScholesModelMonteCarlo","sl":113},{"el":188,"id":10081,"methods":[{"el":177,"sc":3,"sl":171},{"el":182,"sc":3,"sl":179},{"el":187,"sc":3,"sl":184}],"name":"AssetModelMonteCarloFactory.HestonModelMonteCarlo","sl":157},{"el":219,"id":10089,"methods":[{"el":208,"sc":3,"sl":202},{"el":213,"sc":3,"sl":210},{"el":218,"sc":3,"sl":215}],"name":"AssetModelMonteCarloFactory.MertonModelMonteCarlo","sl":196},{"el":250,"id":10097,"methods":[{"el":238,"sc":3,"sl":233},{"el":243,"sc":3,"sl":240},{"el":249,"sc":3,"sl":245}],"name":"AssetModelMonteCarloFactory.VarianceGammaModelMonteCarlo","sl":227}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_339":{"methods":[{"sl":42},{"sl":76},{"sl":171},{"sl":184}],"name":"test","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":79},{"sl":83},{"sl":84},{"sl":87},{"sl":88},{"sl":173},{"sl":175},{"sl":176},{"sl":186}]},"test_459":{"methods":[{"sl":69},{"sl":76},{"sl":233},{"sl":245}],"name":"test","pass":true,"statements":[{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":79},{"sl":83},{"sl":90},{"sl":94},{"sl":95},{"sl":96},{"sl":234},{"sl":236},{"sl":237},{"sl":248}]},"test_556":{"methods":[{"sl":69},{"sl":76},{"sl":202},{"sl":215}],"name":"test","pass":true,"statements":[{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":79},{"sl":83},{"sl":90},{"sl":91},{"sl":92},{"sl":204},{"sl":206},{"sl":207},{"sl":217}]},"test_67":{"methods":[{"sl":42},{"sl":76},{"sl":126},{"sl":144}],"name":"test","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":79},{"sl":80},{"sl":81},{"sl":128},{"sl":135},{"sl":136},{"sl":146}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [339, 67], [], [339, 67], [339, 67], [339, 67], [339, 67], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [556, 459], [556, 459], [556, 459], [556, 459], [556, 459], [], [], [339, 556, 67, 459], [], [], [339, 556, 67, 459], [67], [67], [], [339, 556, 459], [339], [], [], [339], [339], [], [556, 459], [556], [556], [], [459], [459], [459], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [67], [], [67], [], [], [], [], [], [], [67], [67], [], [], [], [], [], [], [], [67], [], [67], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [339], [], [339], [], [339], [339], [], [], [], [], [], [], [], [339], [], [339], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [556], [], [556], [], [556], [556], [], [], [], [], [], [], [], [556], [], [556], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [459], [459], [], [459], [459], [], [], [], [], [], [], [], [459], [], [], [459], [], [], []]