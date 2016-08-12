define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/components/main-viewport.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/main-viewport.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/main-viewport.js should pass jshint.');
  });
});
define('dummy/tests/components/presenter-animate-css.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/presenter-animate-css.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/presenter-animate-css.js should pass jshint.');
  });
});
define('dummy/tests/components/presenter-animated.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/presenter-animated.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/presenter-animated.js should pass jshint.');
  });
});
define('dummy/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('dummy/tests/controllers/cookbook/animation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/cookbook/animation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/cookbook/animation.js should pass jshint.');
  });
});
define('dummy/tests/controllers/cookbook/creating-notices.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/cookbook/creating-notices.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/cookbook/creating-notices.js should pass jshint.');
  });
});
define('dummy/tests/controllers/cookbook/showing-server-errors.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/cookbook/showing-server-errors.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/cookbook/showing-server-errors.js should pass jshint.');
  });
});
define('dummy/tests/controllers/getting-started.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/getting-started.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/getting-started.js should pass jshint.');
  });
});
define('dummy/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('dummy/tests/controllers/tutorial/creating-dialog-templates.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/tutorial/creating-dialog-templates.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tutorial/creating-dialog-templates.js should pass jshint.');
  });
});
define('dummy/tests/controllers/tutorial/creating.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/tutorial/creating.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tutorial/creating.js should pass jshint.');
  });
});
define('dummy/tests/controllers/tutorial/interrupt-closing.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/tutorial/interrupt-closing.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tutorial/interrupt-closing.js should pass jshint.');
  });
});
define('dummy/tests/controllers/tutorial/presenter-and-manager.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/tutorial/presenter-and-manager.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tutorial/presenter-and-manager.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, _emberResolver, _dummyConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/instance-initializers/locale.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - instance-initializers/locale.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/locale.js should pass jshint.');
  });
});
define('dummy/tests/locales/en/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass jshint.');
  });
});
define('dummy/tests/locales/ru/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('dummy/tests/routes/cookbook/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/cookbook/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cookbook/index.js should pass jshint.');
  });
});
define('dummy/tests/routes/getting-started.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/getting-started.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/getting-started.js should pass jshint.');
  });
});
define('dummy/tests/routes/tutorial/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/tutorial/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tutorial/index.js should pass jshint.');
  });
});
define('dummy/tests/routes/tutorial.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/tutorial.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tutorial.js should pass jshint.');
  });
});
define('dummy/tests/services/locale.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/locale.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/locale.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/mixins/context-test', ['exports', 'ember', 'ember-dialog/mixins/context', 'qunit'], function (exports, _ember, _emberDialogMixinsContext, _qunit) {

  (0, _qunit.module)('Unit | Mixin | context');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ContextObject = _ember['default'].Object.extend(_emberDialogMixinsContext['default']);
    var subject = ContextObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/context-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins/context-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/context-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/utils/zindex-test', ['exports', 'ember-dialog/utils/zindex', 'qunit'], function (exports, _emberDialogUtilsZindex, _qunit) {

  (0, _qunit.module)('Unit | Utility | zindex');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _emberDialogUtilsZindex.max)();
    assert.ok(result);
  });
});
define('dummy/tests/unit/utils/zindex-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/utils/zindex-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/zindex-test.js should pass jshint.');
  });
});
define('dummy/tests/utils/change-locale.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - utils/change-locale.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/change-locale.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map