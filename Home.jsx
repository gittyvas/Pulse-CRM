/*
***************************
**       FramerAuth      **
***************************
Modifying the core functionality (core, store or extension overrides) will void your support
Please add custom overrides at the end of the file.
*/

// @ts-ignore
import * as faCore from "https://cdn.framerauth.com/packages/overrides/core/live/latest/core.js"
// @ts-ignore
import * as faStore from "https://cdn.framerauth.com/packages/overrides/store/live/latest/store.js"
// @ts-ignore
import * as faExtensions from "https://cdn.framerauth.com/packages/overrides/extensions/live/latest/extensions.js"

/*
 ***************************
 **     Core overrides    **
 ***************************
 */
export function withFullName(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faCore.withFullName(Component)
}
export function withAuth(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faCore.withAuth(Component)
}
export function withStore(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faCore.withStore(Component)
}
export function withSignOut(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faCore.withSignOut(Component)
}
export function withEmail(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faCore.withEmail(Component)
}
export function withFirstName(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faCore.withFirstName(Component)
}
export function withLoggedIn(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faCore.withLoggedIn(Component)
}
export function withLoggedOut(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faCore.withLoggedOut(Component)
}

/*
 ***************************
 **    Store overrides    **
 ***************************
 */
export function withActiveLicense(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faStore.withActiveLicense(Component)
}
export function withNoActiveLicense(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faStore.withNoActiveLicense(Component)
}
export function withVariant(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faStore.withVariant(Component)
}
export function withVariantActiveLicense(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faStore.withVariantActiveLicense(Component)
}

/*
 ***************************
 **  Extension overrides  **
 ***************************
 */
export function withDynamicGridHeight(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faExtensions.withDynamicGridHeight(Component)
}

/*
 ***************************
 **    Legacy overrides   **
 ***************************
 */
export function withIsLessonComplete(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faExtensions.withIsTagged(Component, "course:status", "completed")
}

export function withActionCompleteLesson(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    return faExtensions.withToggleTag(Component, "course:status", "completed")
}

/*
***********************************************************
** FramerAuth -- Make your own CUSTOM withPlan overrides **
***********************************************************
To make your own overrides for withPlan, follow these 3 steps:
1. Copy the override below and change the override name "withPlanStandard" to something else (e.g. withPlanPremium).
2. Change the licenseId field inside your new override to the license ID you want to use.
3. Start using your new override on your site. Make sure the override code is updated on your site.
*/
export function withPlanStandard(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    // Enter your own LemonSqueezy Product Variant ID here
    const licenseId = "123456" // <-- Your LemonSqueezy Product Variant ID for this override goes here (example)
    return faStore.withPlan(Component, licenseId)
} // copy until here

/*
**************************************************************
** FramerAuth -- Make your own CUSTOM bookmarking overrides **
**************************************************************
To make your own overrides for bookmarking, follow these 4 steps:
1. Copy the override below and change the override name "withComponentBookmarkBlog" to something else (e.g. withComponentBookmarkLesson).
2. Change the prefix field inside your new override (e.g. "bookmark:lesson")
3. Repeat steps 1 & 2 for withToggleBookmarkBlog & withToggleBookmarkLesson
3. Start using your new override on your site. Make sure the override code is updated on your site.
*/
export function withComponentBookmarkBlog(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    const prefix = "bookmark:blog" // <--- Your custom prefix for this override goes here (example)
    return faExtensions.withTags(Component, prefix)
}
export function withIsBookmarkedBlog(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    const prefix = "bookmark:blog" // <--- Your custom prefix for this override goes here (example)
    return faExtensions.withIsTagged(Component, prefix)
}
export function withToggleBookmarkBlog(
    Component: React.FunctionComponent<any>
): React.ComponentType<any> {
    const prefix = "bookmark:blog" // <--- Your custom prefix for this override goes here (example)
    return faExtensions.withToggleTag(Component, prefix)
}
