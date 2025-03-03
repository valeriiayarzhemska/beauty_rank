#import "AppDelegate.h"

#import <Firebase.h>

#import <React/RCTBundleURLProvider.h>

// #import <GoogleSignIn/GoogleSignIn.h>

#import <AuthenticationServices/AuthenticationServices.h>
#import <SafariServices/SafariServices.h>
#import <FBSDKCoreKit/FBSDKCoreKit-Swift.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  
  self.moduleName = @"global_beauty_rank";

  [super application:application didFinishLaunchingWithOptions:launchOptions];
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  // self.initialProps = @{};

  [[FBSDKApplicationDelegate sharedInstance] application:application
      didFinishLaunchingWithOptions:launchOptions];

  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
