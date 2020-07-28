var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":177,"id":19610,"methods":[{"el":71,"sc":2,"sl":68},{"el":82,"sc":2,"sl":78},{"el":94,"sc":2,"sl":90},{"el":109,"sc":2,"sl":96},{"el":147,"sc":2,"sl":118},{"el":151,"sc":2,"sl":149},{"el":155,"sc":2,"sl":153},{"el":176,"sc":2,"sl":157}],"name":"MonteCarloConditionalExpectationRegression","sl":32},{"el":41,"id":19610,"methods":[],"name":"MonteCarloConditionalExpectationRegression.RegressionBasisFunctions","sl":39},{"el":59,"id":19610,"methods":[{"el":53,"sc":3,"sl":50},{"el":58,"sc":3,"sl":55}],"name":"MonteCarloConditionalExpectationRegression.RegressionBasisFunctionsGiven","sl":47}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_138":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testVega[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_165":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testGenericDelta[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_208":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_212":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":90},{"sl":96},{"sl":118},{"sl":157}],"name":"testSwaption","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":91},{"sl":92},{"sl":93},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_223":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testDelta[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_246":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":90},{"sl":96},{"sl":118},{"sl":157}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":91},{"sl":92},{"sl":93},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_292":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_333":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testProductAADSensitivities[2]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_365":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@22fcf7ab,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2de23121,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=2], abstractRandomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@c0c2f8d,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=2]]]]-EuropeanOption [maturity=5.0, strike=1.2840254166877414, underlyingIndex=0, nameOfUnderliyng=null]]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_373":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_427":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_50":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"test[RandomVariableFromArrayFactory TestFunctionMonteCarloBermudanOption(1,3,1,1)]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_537":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@22fcf7ab,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2de23121,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=2], abstractRandomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@c0c2f8d,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=2]]]]-AbstractMonteCarloProduct [currency=null]]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_547":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_577":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"test[RandomVariableDifferentiableAADFactory TestFunctionMonteCarloBermudanOption(1,3,1,1)]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_607":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testProductAADSensitivities","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_78":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":90},{"sl":96},{"sl":118},{"sl":157}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":91},{"sl":92},{"sl":93},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]},"test_95":{"methods":[{"sl":50},{"sl":55},{"sl":68},{"sl":78},{"sl":96},{"sl":118},{"sl":157}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":57},{"sl":69},{"sl":70},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":133},{"sl":138},{"sl":139},{"sl":140},{"sl":144},{"sl":146},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":175}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [], [], [], [], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [], [], [], [], [537, 577, 292, 50, 427, 333, 607, 547, 373, 223, 165, 208, 138, 365, 95], [537, 577, 292, 50, 427, 333, 607, 547, 373, 223, 165, 208, 138, 365, 95], [537, 577, 292, 50, 427, 333, 607, 547, 373, 223, 165, 208, 138, 365, 95], [537, 577, 292, 50, 427, 333, 607, 547, 373, 223, 165, 208, 138, 365, 95], [], [], [], [], [], [], [], [], [78, 246, 212], [78, 246, 212], [78, 246, 212], [78, 246, 212], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [], [], [], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [], [], [], [], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], [], [], [537, 78, 577, 292, 50, 427, 333, 607, 547, 246, 373, 223, 165, 208, 212, 138, 365, 95], [], []]