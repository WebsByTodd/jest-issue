# Steps to reproduce

    npm install
    npm test

Observe test failure:

    FAIL  src/components/SomeComponent/index.spec.tsx
    ● Test suite failed to run

    /Users/todd/react/jest-issue/src/components/SomeComponent/index.html:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){<p>Some Html</p>
                                                                                             ^
    SyntaxError: Unexpected token <

      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:305:17)
      at Object.<anonymous> (src/components/SomeComponent/SomeComponent.tsx:14:12)
      at Object.<anonymous> (src/components/SomeComponent/index.spec.tsx:5:23)
      
Now in `packace.json` swap lines 28 and 29.

Before:

    ".(ts|tsx)": "./node_modules/ts-jest/preprocessor.js",
    "html": "./transformer.js"
    
After:

    "html": "./transformer.js",
    ".(ts|tsx)": "./node_modules/ts-jest/preprocessor.js"


Run `npm test` again and the test will pass:

    PASS  src/components/SomeComponent/index.spec.tsx
    ✓ SomeComponent renders (11ms)
