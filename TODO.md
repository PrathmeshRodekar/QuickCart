# TODO: Fix Inngest Trigger Error

- [x] Add import for `User` model from `../models/User` in `Config/inngest.js`
- [x] Fix typo in `syncUserDeletion` trigger: change `{ evenr: "clerk/user.deleted" }` to `{ event: "clerk/user.deleted" }`
- [x] Correct parameter usage in `syncUserCreation`: change `event.data` to `Event.data` (since parameter is `{ Event }`)
- [x] Add parentheses to `connectDB` calls in `syncUserUpdation` and `syncUserDeletion`: change `await connectDB;` to `await connectDB();`
- [x] Fix typo in `syncUserUpdation`: change `User.findBYIdAndUpdate` to `User.findByIdAndUpdate`
- [x] Fix typo in `syncUserDeletion`: change `User.frindByAndDelete` to `User.findByIdAndDelete`
