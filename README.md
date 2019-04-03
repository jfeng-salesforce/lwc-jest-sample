
lwc-jest v0.4.12 does not seem to be generating accurate results for the conditional truecount / falsecount statements. It add

# Expected Behaviour

Expected / desired clover.xml output for default lwc-jest --coverage --reporters=default --reporters=jest-junit

```
<?xml version="1.0" encoding="UTF-8"?>
<coverage generated="1554241233660" clover="3.2.0">
  <project timestamp="1554241233660" name="All files">
    <metrics statements="7" coveredstatements="7" conditionals="2" coveredconditionals="2" methods="3" coveredmethods="3" elements="12" coveredelements="12" complexity="0" loc="7" ncloc="7" packages="1" files="1" classes="1">
      <file name="navBar.js" path="/home/circleci/foo/force-app/main/default/lwc/navBar/navBar.js">
        <metrics statements="7" coveredstatements="7" conditionals="2" coveredconditionals="2" methods="3" coveredmethods="3"/>
        <line num="3" count="4" type="stmt"/>
        <line num="8" count="2" type="cond" truecount="1" falsecount="1"/>
        <line num="9" count="1" type="stmt"/>
        <line num="11" count="1" type="stmt"/>
        <line num="12" count="1" type="stmt"/>
        <line num="14" count="1" type="stmt"/>
        <line num="18" count="2" type="stmt"/>
      </file>
    </metrics>
  </project>
</coverage>
```

# Actual Behaviour

## 0.4.12

https://circleci.com/gh/jfeng-salesforce/lwc-jest-sample/4

```
<?xml version="1.0" encoding="UTF-8"?>
<coverage generated="1554241233660" clover="3.2.0">
  <project timestamp="1554241233660" name="All files">
    <metrics statements="7" coveredstatements="7" conditionals="2" coveredconditionals="2" methods="3" coveredmethods="3" elements="12" coveredelements="12" complexity="0" loc="7" ncloc="7" packages="1" files="1" classes="1">
      <file name="navBar.js" path="/home/circleci/foo/force-app/main/default/lwc/navBar/navBar.js">
        <metrics statements="7" coveredstatements="7" conditionals="2" coveredconditionals="2" methods="3" coveredmethods="3"/>
        <line num="3" count="4" type="stmt"/>
        <line num="8" count="2" type="cond" truecount="2" falsecount="0"/>
        <line num="9" count="1" type="stmt"/>
        <line num="11" count="1" type="stmt"/>
        <line num="12" count="1" type="stmt"/>
        <line num="14" count="1" type="stmt"/>
        <line num="18" count="2" type="stmt"/>
      </file>
    </metrics>
  </project>
</coverage>
```

