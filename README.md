# Thinfilm

## Task 1
Implement an Ionic app (Angular, TypeScript, Cordova) that will perform three
functions: add a note, view note and launch https://thinfilmnfc.com . Note should persist
between app session. The app should function both on Android and iOS device, responsive to
device resolution.

## Task 2
Write one-page summary of Continuous Integration, Continuous Deployment and
Continuous Delivery solutions for an Ionic app, what kind of tools\frameworks\services that can
be used.

---------------------------------------------------------------------------------------------------

Before we setup CI/CD, we should have at least 80 ~ 90 % unit test, because with out a good unit test
CI/CD will cost alot regression, the application will be very unstable.

CI is a development practice that requires developers to integrate code into a shared repository (github/gitlab) several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.
developers should also create "merge request"

in Continuous Integration, there are two popular application, NeverCode and Jenkins, both are very easy to setup
for autmation build processes, 


for Continuous Deployment is the natural extension of Continuous Integration: an approach in which teams ensure that every change to the system is releasable, and that we can release any version at the push of a button. Continuous Delivery aims to make releases boring, so we can deliver frequently and get fast feedback on what users care about.

FastLane is only tool we use in the past, and  Fastlane is a collection of tools for making your iOS deployments hassle-free and effortless. Fastlane allows developers to connect their deployment tools to streamline iOS (and Android) deployment workflows.


