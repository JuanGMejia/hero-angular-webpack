module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        {pattern: './src/**/*.spec.ts', included: false}
      ],
      exclude: [
      ],
      preprocessors: {
      },
      plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        require('karma-webpack')
      ],
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['Chrome'],
      singleRun: true,
      concurrency: Infinity
    })
  }