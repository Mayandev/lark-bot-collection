const axios = require("axios");
const LARK_HOOK_URL = process.env.SAVE_YOU_ASS_BOT_HOOK_URL;

// ζθζι
async function postLarkMsg() {

  const card = {
    config: {
      wide_screen_mode: false,
    },
    header: {
      template: "green",
      title: {
        content: "πΌ ζθζι πΌ",
        tag: "plain_text",
      },
    },
    elements: [
      {
        tag: "div",
        text: {
          content: "<at id=all></at> ε¨δ½θ΅·η«οΌη°ε¨η«ε»ι©¬δΈζθ 20 ζ¬‘",
          tag: "lark_md",
        },
      },
    ],
  };

  axios.post(LARK_HOOK_URL, {
    msg_type:"interactive", card
  });
}

postLarkMsg();
