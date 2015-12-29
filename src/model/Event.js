var EVENT = {
    BATTLE_START: "BATTLE_START",
    BATTLE_WIN: "BATTLE_WIN",
    LEAVE_BOSS_BATTLE: "LEAVE_BOSS_BATTLE",
    FIGHT_BOSS_BATTLE: "FIGHT_BOSS_BATTLE"
};

var customEventHelper = {
    bindListener: function (eventName, listener) {
        this.customEventListener = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: eventName,
            callback: listener
        });
        cc.eventManager.addListener(this.customEventListener, 1);
    },

    sendEvent: function (eventName, eventData) {
        var event = new cc.EventCustom(eventName);
        event.setUserData(eventData);
        cc.eventManager.dispatchEvent(event);
    }
};