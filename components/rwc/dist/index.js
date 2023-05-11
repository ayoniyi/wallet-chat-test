function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"popupButton__container":"_2fl_w","popupButton":"_2GiZc","icon":"_3hWrH","activeIcon":"_22AQr","notif":"_2Syjk"};

function ButtonOverlay(_ref) {
  var notiVal = _ref.notiVal,
      showNoti = _ref.showNoti,
      isOpen = _ref.isOpen,
      clickHandler = _ref.clickHandler;
  console.log("showNoti: " + showNoti);
  console.log("notiVal: " + notiVal);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.popupButton__container
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.popupButton,
    onClick: clickHandler
  }, /*#__PURE__*/React__default.createElement("div", {
    className: !isOpen ? styles.icon + " " + styles.activeIcon : "" + styles.icon
  }, /*#__PURE__*/React__default.createElement("img", {
    src: "https://uploads-ssl.webflow.com/62d761bae8bf2da003f57b06/62d761bae8bf2dea68f57b52_walletchat%20logo.png",
    style: {
      height: "90%"
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: isOpen ? styles.icon + " " + styles.activeIcon : "" + styles.icon
  }, /*#__PURE__*/React__default.createElement("svg", {
    focusable: "false",
    viewBox: "0 0 16 14",
    width: "28",
    height: "25",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"
  })))), showNoti && /*#__PURE__*/React__default.createElement("div", {
    className: styles.notif
  }, notiVal));
}

var styles$1 = {"wallet-chat-widget":"_29Wlm","wallet-chat-widget__container":"_2nZnY"};

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue;
  console.log("Cookies now");
  console.log(document.cookie);
}

function WalletChatWidget(_ref) {
  var widgetState = _ref.widgetState;

  var _useState = React.useState(widgetState === null || widgetState === void 0 ? void 0 : widgetState.isOpen),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = React.useState(widgetState === null || widgetState === void 0 ? void 0 : widgetState.chatAddr),
      chatAddr = _useState2[0],
      setChatAddr = _useState2[1];

  var _useState3 = React.useState(false),
      hideIframe = _useState3[0],
      setHideIframe = _useState3[1];

  var _useState4 = React.useState(0),
      numUnread = _useState4[0],
      setNumUnread = _useState4[1];

  var url = process.env.REACT_APP_APP_URL || "https://v1.walletchat.fun";
  var iframe_url = process.env.REACT_APP_APP_URL || "https://v1.walletchat.fun";
  React.useEffect(function () {
    try {
      if (widgetState !== null && widgetState !== void 0 && widgetState.signature) {
        console.log("useEffect signIn");
        var authSig = {
          sig: widgetState.signature,
          derivedVia: "web3.eth.personal.sign",
          signedMessage: widgetState.messageToSign,
          address: widgetState.address.toLocaleLowerCase()
        };
        console.log('✅[INFO][AuthSig]:', authSig);
        var iframe = document.getElementById("wallet-chat-widget");
        var msg = {
          "data": widgetState,
          "target": "sign_in"
        };
        iframe.contentWindow.postMessage(msg, iframe_url);
      } else {
        console.log("useEffect widgetState");
        setIsOpen(widgetState === null || widgetState === void 0 ? void 0 : widgetState.isOpen);
        setChatAddr(widgetState === null || widgetState === void 0 ? void 0 : widgetState.chatAddr);
        setHideIframe(true);
        setTimeout(function () {
          setHideIframe(false);
        }, 100);
      }
    } catch (error) {
      console.log('🚨widgetConnectError', error);
    }
  }, [widgetState]);
  console.log("url: " + url);

  var clickHandler = function clickHandler(e) {
    setIsOpen(!isOpen);
  };

  if (chatAddr != undefined && chatAddr.length != 0) {
    url += "/dm/" + chatAddr;
  }

  console.log("url: " + url);
  url = {
    val: url
  };
  React.useEffect(function () {
    window.addEventListener("message", function (e) {
      var data = e.data;
      console.log("RECEIVED message from CHILD TO PARENT");
      console.log(data);

      if (data["target"] == 'unread_cnt') {
        setNumUnread(data["data"]);
        setCookie("unreadMsgs", data["data"]);
      }
    });
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    id: styles$1["wallet-chat-widget__container"]
  }, !hideIframe && /*#__PURE__*/React__default.createElement("iframe", {
    id: "wallet-chat-widget",
    className: styles$1["wallet-chat-widget"],
    style: {
      height: isOpen ? "" : "0px",
      width: isOpen ? "" : "0px",
      minHeight: isOpen ? "" : "0px",
      minWidth: isOpen ? "" : "0px"
    },
    src: url.val
  }), /*#__PURE__*/React__default.createElement(ButtonOverlay, {
    notiVal: numUnread,
    showNoti: numUnread > 0,
    isOpen: isOpen,
    clickHandler: clickHandler
  }));
}

exports.ButtonOverlay = ButtonOverlay;
exports.WalletChatWidget = WalletChatWidget;
//# sourceMappingURL=index.js.map
