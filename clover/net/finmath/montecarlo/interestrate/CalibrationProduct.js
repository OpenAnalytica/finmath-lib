var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":107,"id":20102,"methods":[{"el":42,"sc":2,"sl":35},{"el":46,"sc":2,"sl":44},{"el":50,"sc":2,"sl":48},{"el":54,"sc":2,"sl":52},{"el":58,"sc":2,"sl":56},{"el":71,"sc":2,"sl":65},{"el":78,"sc":2,"sl":76},{"el":85,"sc":2,"sl":83},{"el":92,"sc":2,"sl":90},{"el":99,"sc":2,"sl":97},{"el":106,"sc":2,"sl":101}],"name":"CalibrationProduct","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_187":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_227":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testSwaptionCalibration[SPOT]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_235":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91}]},"test_253":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testSwaptionCalibration[TERMINAL]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_34":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91}]},"test_426":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_469":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91}]},"test_499":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testSwaptionCalibration[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_542":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_579":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_596":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testSwaptionCalibration[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]},"test_612":{"methods":[{"sl":35},{"sl":44},{"sl":52},{"sl":56},{"sl":76},{"sl":83},{"sl":90},{"sl":97}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":45},{"sl":53},{"sl":57},{"sl":77},{"sl":84},{"sl":91},{"sl":98}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [], [], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [], [], [], [], [], [], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [], [], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [], [], [], [], [], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [], [], [], [], [], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [235, 187, 34, 499, 612, 469, 10, 579, 227, 596, 542, 253, 426], [], [], [], [], [], [187, 499, 612, 10, 579, 227, 596, 542, 253, 426], [187, 499, 612, 10, 579, 227, 596, 542, 253, 426], [], [], [], [], [], [], [], [], []]