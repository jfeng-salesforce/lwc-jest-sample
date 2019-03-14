
# Expected Behaviour

Expected / desired behaviour for default lwc-jest --coverage:

```
    ----------------------|----------|----------|----------|----------|-------------------|
    File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
    ----------------------|----------|----------|----------|----------|-------------------|
    All files             |     blah |      100 |       50 |     blah |                   |
     footer.html.compiled |        0 |       50 |        0 |        0 |              blah |
     navBar.html.compiled |    88.89 |       50 |      100 |    88.89 |                29 |
    ----------------------|----------|----------|----------|----------|-------------------|
```

Expected / desired behaviour with collectCoverageFrom="**/*.js" override in jest.config.js:

```
    ----------------------|----------|----------|----------|----------|-------------------|
    File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
    ----------------------|----------|----------|----------|----------|-------------------|
    All files             |     blah |      100 |       50 |     blah |                   |
     jest.config.js       |        0 |      100 |        0 |        0 |... 16,17,18,19,22 |
     footer.html.compiled |        0 |       50 |        0 |        0 |              blah |
     navBar.html.compiled |    88.89 |       50 |      100 |    88.89 |                29 |
    ----------------------|----------|----------|----------|----------|-------------------|
```

# Actual Behaviour

## 0.4.10

0.4.10 without jest.config.js override:
https://circleci.com/gh/jfeng-salesforce/lwc-jest-sample/4

```
    $ lwc-jest --coverage --verbose -- --runInBand --ci --testLocationInResults --reporters=default --reporters=jest-junit --coverageDirectory=testResults/lwc
     PASS  force-app/main/default/lwc/navBar/__tests__/navBar.test.js
      c-nav-bar
        ✓ contains the right title (19ms)

    ----------------------|----------|----------|----------|----------|-------------------|
    File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
    ----------------------|----------|----------|----------|----------|-------------------|
    All files             |    88.89 |       50 |      100 |    88.89 |                   |
     navBar.html.compiled |    88.89 |       50 |      100 |    88.89 |                29 |
    ----------------------|----------|----------|----------|----------|-------------------|
    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
```

0.4.10 with jest.config.js:
https://circleci.com/gh/jfeng-salesforce/lwc-jest-sample/3

```
    $ lwc-jest --coverage --verbose -- --runInBand --ci --testLocationInResults --reporters=default --reporters=jest-junit --coverageDirectory=testResults/lwc
    Adding coverage location: **/force-app/main/default/lwc/**/*.js
     PASS  force-app/main/default/lwc/navBar/__tests__/navBar.test.js
      c-nav-bar
        ✓ contains the right title (23ms)

    ----------------|----------|----------|----------|----------|-------------------|
    File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
    ----------------|----------|----------|----------|----------|-------------------|
    All files       |        0 |      100 |        0 |        0 |                   |
     jest.config.js |        0 |      100 |        0 |        0 |... 16,17,18,19,22 |
    ----------------|----------|----------|----------|----------|-------------------|
    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
```

## 0.4.12

0.4.12 without jest.config.js override:
https://circleci.com/gh/jfeng-salesforce/lwc-jest-sample/1

```
    $ lwc-jest --coverage --verbose -- --runInBand --ci --testLocationInResults --reporters=default --reporters=jest-junit --coverageDirectory=testResults/lwc
     PASS  force-app/main/default/lwc/navBar/__tests__/navBar.test.js
      c-nav-bar
        ✓ contains the right title (19ms)

    ----------|----------|----------|----------|----------|-------------------|
    File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
    ----------|----------|----------|----------|----------|-------------------|
    All files |  Unknown |  Unknown |  Unknown |  Unknown |                   |
    ----------|----------|----------|----------|----------|-------------------|
    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
```

0.4.12 with jest.config.js override:
https://circleci.com/gh/jfeng-salesforce/lwc-jest-sample/2

```
    $ lwc-jest --coverage --verbose -- --runInBand --ci --testLocationInResults --reporters=default --reporters=jest-junit --coverageDirectory=testResults/lwc
    Adding coverage location: **/force-app/main/default/lwc/**/*.js
     PASS  force-app/main/default/lwc/navBar/__tests__/navBar.test.js
      c-nav-bar
        ✓ contains the right title (20ms)

    ----------------|----------|----------|----------|----------|-------------------|
    File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
    ----------------|----------|----------|----------|----------|-------------------|
    All files       |        0 |      100 |        0 |        0 |                   |
     jest.config.js |        0 |      100 |        0 |        0 |... 16,17,18,19,22 |
    ----------------|----------|----------|----------|----------|-------------------|
    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
```
