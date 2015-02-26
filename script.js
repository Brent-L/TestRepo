var app = angular.module( 'app', [ 'ui.router' ] );

app.config( function( $stateProvider, $urlRouterProvider ) {
  
  // if url not defined redirect to login
  $urlRouterProvider.when( '', "/pages" );
  // if nonexistant url defined redirect to sign-in
  $urlRouterProvider.otherwise( "/pages" );
  
     $stateProvider
        .state( 'pages',  {
        url: "/pages",
        abstract: true,
        template: '<ui-view />'
    }) // nested paper states
    .state( 'pages.home', {
        url: '', // default load, no path defined
        templateUrl: 'pages.home.html',
    })
    .state( 'pages.page1', {
        url: '/paper1',
        templateUrl: 'pages.page1.html',
    })
    .state( 'pages.page2', {
        url: '/paper2',
        templateUrl: 'pages.page2.html',
    });  
}