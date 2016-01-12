'use strict';

const TestFairyBridge = require("react-native").NativeModules.TestFairyBridge;

class TestFairy {
	/**
	 * Initialize a TestFairy session with options.
	 *
	 * @param appToken Your key as given to you in your TestFairy account
	 * @param options A dictionary of options controlling the current session
	 */
	static begin(appKey, options = {}) {
		TestFairyBridge.begin(appKey, options);
	}

	/**
	 * Sets a correlation identifier for this session. This value can
	 * be looked up via web dashboard. For example, setting correlation
	 * to the value of the user-id after they logged in. Can be called
	 * only once per session (subsequent calls will be ignored.)
	 *
	 * @param correlationId Id for the current session
	 */
	static setCorrelationId(correlationId) {
		TestFairyBridge.setCorrelationId(correlationId);
	}

	/**
	 * Sets a correlation identifier for this session. This value can
	 * be looked up via web dashboard. For example, setting correlation
	 * to the value of the user-id after they logged in. Can be called
	 * only once per session (subsequent calls will be ignored.)
	 *
	 * @param correlationId Id for the current session
	 * @param traits Attributes and custom attributes to be associated with this session
	 */
	static identify(correlationId, traits = {}) {
		TestFairyBridge.identify(correlationId, traits);
	}

	/**
	 * Takes a screenshot.
	 */
	static takeScreenshot() {
		TestFairyBridge.takeScreenshot();
	}

	/**
	 * Pauses the current session. This method stops recoding of
	 * the current session until resume has been called.
	 *
	 * @see resume
	 */
	static pause() {
		TestFairyBridge.pause();
	}

	/**
	 * Resumes the recording of the current session. This method
	 * resumes a session after it was paused.
	 *
	 * @see pause
	 */
	static resume() {
		TestFairyBridge.resume();
	}

	/**
	 * Marks a checkpoint in session. Use this text to tag a session
	 * with a checkpoint name. Later you can filter sessions where your
	 * user passed through this checkpoint, for bettering understanding
	 * user experience and behavior.
	 *
	 * @param name The checkpoint name
	 */
	static checkpoint(name) {
		TestFairyBridge.checkpoint(name);
	}

	/**
	 * Send a feedback on behalf of the user. Call when using a in-house
	 * feedback view controller with a custom design and feel. Feedback will
	 * be associated with the current session.
	 *
	 * @param feedbackString Feedback text
	 */
	static sendUserFeedback(feedback) {
		TestFairyBridge.sendUserFeedback(feedback);
	}

	/**
	 * Hides a specific view from appearing in the video generated.
	 *
	 * @param view The specific view you wish to hide from screenshots
	 */
	static hideView(viewTag) {
		TestFairyBridge.hideView(viewTag);
	}
}

module.exports = TestFairy;
