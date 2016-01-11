require 'appirio-tech-api-schemas'
require './styles/main.scss'
require './scripts/example.module'
require './scripts/routes'

exampleNav = require './nav.jade'

document.getElementById('example-nav').innerHTML = exampleNav()

requireContextFiles = (files) ->
  paths = files.keys()

  for path in paths
    files path

views       = require.context './views/', true, /^(.*\.(jade$))[^.]*$/igm
controllers = require.context './scripts/controllers/', true, /^(.*\.(coffee$))[^.]*$/igm

requireContextFiles controllers

viewPaths = views.keys()

templateCache = ($templateCache) ->
  for viewPath in viewPaths
    viewPathClean = viewPath.split('./').pop()

    # TODD: bug if .jade occurs more often than once
    viewPathCleanHtml = viewPathClean.replace '.jade', '.html'

    $templateCache.put "views/#{viewPathCleanHtml}", views(viewPath)()

templateCache.$nject = ['$templateCache']

angular.module('example').run templateCache
