/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-ai',

    contentFor: function(type, config) {
    if (type === 'head-footer' && config['ember-cli-ai']) {
      return "<script>var appInsights=window.appInsights||function(a){function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var h,i,c={config:a},d=document,e=window,f='script',g=d.createElement(f);for(g.src=a.url||'//az416426.vo.msecnd.net/scripts/a/ai.0.js',d.getElementsByTagName(f)[0].parentNode.appendChild(g),c.cookie=d.cookie,c.queue=[],h=['Event','Exception','Metric','PageView','Trace','Ajax'];h.length;)b('track'+h.pop());return b('setAuthenticatedUserContext'),b('clearAuthenticatedUserContext'),a.disableExceptionTracking||(h='onerror',b('_'+h),i=e[h],e[h]=function(a,b,d,e,f){var g=i&&i(a,b,d,e,f);return g!==!0&&c['_'+h](a,b,d,e,f),g}),c}({instrumentationKey: '" + config['ember-cli-ai'].instrumentationKey + "'});window.appInsights=appInsights,appInsights.trackPageView();</script>"
    }
  }
};
