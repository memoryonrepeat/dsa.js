#Test case directory
TESTCASES = test/*.js

# Bored of testing ? Try this:
# mocha $(TESTCASES) --reporter nyan tests -b
# istanbul cover _mocha -- $(TESTCASES) -R nyan

test:
	# mocha $(TESTCASES) --reporter spec
	
	# Explanation: http://www.vapidspace.com/coding/2014/10/29/code-coverage-metrics-with-mocha-and-istanbul/
	istanbul cover _mocha -- $(TESTCASES) -R nyan

# The "make" program always try to find a target file with
# the indicated name to build. This is not the case as we just want
# it to run the script without compiling anything.
# .PHONY helps excluding the test folder from being built by make.
.PHONY: test