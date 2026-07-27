
const lessons = {
  interest: {
    icon: "🏦",
    name: "금리",
    desc: "돈을 빌리는 가격부터 시작해요.",
    steps: [
      {
        kicker: "첫 번째 칸",
        title: "금리는 무엇일까요?",
        body: "금리는 돈을 빌린 사람이 빌려준 사람에게 내는 사용료예요.<div class='key-box'>쉽게 말하면 금리는 ‘돈의 가격’이에요.</div>",
        choices: [
          { question: "그럼 금리가 오르면 어떻게 돼?", answer: "대출 부담은 커지고, 소비와 투자는 줄어들기 쉬워요." },
          { question: "왜 중앙은행이 금리를 정해?", answer: "물가와 경기의 속도를 조절하기 위해서예요." }
        ]
      },
      {
        kicker: "두 번째 칸",
        title: "금리가 오르면 왜 소비가 줄까요?",
        body: "대출이자 부담이 커지고, 예금의 매력이 높아지기 때문이에요. 사람과 기업은 지출보다 저축을 선택할 가능성이 커져요.",
        choices: [
          { question: "그럼 주식에는 어떤 영향이 있어?", answer: "기업의 자금 부담이 커지고 주식의 매력이 낮아질 수 있어요." },
          { question: "물가와는 무슨 관계야?", answer: "금리를 올리면 소비가 줄어 물가 상승 압력이 낮아질 수 있어요." }
        ]
      },
      {
        kicker: "세 번째 칸",
        title: "금리는 경제의 속도 조절 장치예요.",
        body: "물가가 너무 빠르게 오르면 금리를 올려 수요를 진정시키고, 경기가 너무 느려지면 금리를 내려 소비와 투자를 돕기도 해요.",
        final: true
      }
    ]
  },
  etf: {
    icon: "🧺",
    name: "ETF",
    desc: "여러 자산을 한 바구니에 담아요.",
    steps: [
      {
        kicker: "첫 번째 칸",
        title: "ETF는 무엇일까요?",
        body: "ETF는 여러 주식이나 채권을 한 바구니에 담아 거래소에서 사고팔 수 있게 만든 상품이에요.<div class='key-box'>한 종목이 아니라 ‘묶음’을 사는 방식이에요.</div>",
        choices: [
          { question: "왜 한 종목보다 덜 위험할 수 있어?", answer: "여러 자산에 나눠 담아 한 기업의 영향을 줄일 수 있어서예요." },
          { question: "펀드와 뭐가 달라?", answer: "ETF는 주식처럼 장중에 바로 사고팔 수 있어요." }
        ]
      },
      {
        kicker: "두 번째 칸",
        title: "ETF가 분산에 도움이 되는 이유",
        body: "여러 자산을 함께 담으면 특정 기업 하나의 문제가 전체 결과에 미치는 영향을 줄일 수 있어요. 다만 손실 가능성이 없어지는 것은 아니에요.",
        choices: [
          { question: "ETF도 종류가 많아?", answer: "주식·채권·원자재·산업별 등 매우 다양해요." },
          { question: "수수료는 왜 봐야 해?", answer: "작은 비용도 오래 쌓이면 실제 수익에 차이를 만들기 때문이에요." }
        ]
      },
      {
        kicker: "세 번째 칸",
        title: "ETF는 구조를 이해하고 골라야 해요.",
        body: "어떤 지수를 따라가는지, 어떤 자산이 들어 있는지, 수수료와 거래량은 어떤지 확인하는 습관이 중요해요.",
        final: true
      }
    ]
  },
  exchange: {
    icon: "💱",
    name: "환율",
    desc: "원화와 달러의 교환 가격이에요.",
    steps: [
      {
        kicker: "첫 번째 칸",
        title: "환율은 무엇일까요?",
        body: "환율은 서로 다른 나라의 돈을 바꾸는 비율이에요.<div class='key-box'>원·달러 환율은 달러 1달러를 사는 데 필요한 원화의 양을 뜻해요.</div>",
        choices: [
          { question: "환율이 오르면 무슨 뜻이야?", answer: "같은 달러를 사는 데 더 많은 원화가 필요하다는 뜻이에요." },
          { question: "왜 매일 변해?", answer: "금리·무역·투자 심리 같은 수요와 공급이 계속 달라지기 때문이에요." }
        ]
      },
      {
        kicker: "두 번째 칸",
        title: "원·달러 환율이 오르면?",
        body: "같은 1달러를 사는 데 더 많은 원화가 필요해요. 일반적으로 원화 가치가 달러보다 약해졌다고 표현해요.",
        choices: [
          { question: "수입 물가에는 어떤 영향이 있어?", answer: "해외 물건과 원재료를 사는 비용이 커질 수 있어요." },
          { question: "수출 기업에는 무조건 좋아?", answer: "도움이 될 수 있지만 원재료 비용과 환헤지에 따라 달라요." }
        ]
      },
      {
        kicker: "세 번째 칸",
        title: "환율은 여러 힘이 함께 움직여요.",
        body: "금리 차이, 경기 전망, 무역, 투자자 심리처럼 여러 요인이 동시에 영향을 줘요. 한 가지 이유만으로 설명하기 어려운 경우가 많아요.",
        final: true
      }
    ]
  },
  bond: {
    icon: "📄",
    name: "채권",
    desc: "정부나 기업에 돈을 빌려주는 증서예요.",
    steps: [
      {
        kicker: "첫 번째 칸",
        title: "채권은 무엇일까요?",
        body: "채권은 정부나 기업이 돈을 빌리고, 약속한 이자와 원금을 갚겠다는 증서예요.<div class='key-box'>채권을 산다는 것은 발행자에게 돈을 빌려주는 일이에요.</div>",
        choices: [
          { question: "채권 가격은 왜 움직여?", answer: "시장금리와 발행자의 신용도가 바뀌기 때문이에요." },
          { question: "국채와 회사채는 뭐가 달라?", answer: "돈을 빌리는 주체가 정부인지 기업인지가 달라요." }
        ]
      },
      {
        kicker: "두 번째 칸",
        title: "금리와 채권 가격은 왜 반대로 움직일까요?",
        body: "새로 발행되는 채권의 금리가 더 높아지면, 기존의 낮은 이자 채권은 매력이 줄어 가격이 내려갈 수 있어요.",
        choices: [
          { question: "그럼 금리가 내리면?", answer: "기존의 높은 이자 채권이 더 매력적이어서 가격이 오를 수 있어요." },
          { question: "만기가 길면 왜 더 민감해?", answer: "오랜 기간 받는 이자의 가치가 금리 변화에 더 크게 영향을 받아요." }
        ]
      },
      {
        kicker: "세 번째 칸",
        title: "채권도 위험을 살펴야 해요.",
        body: "발행자가 돈을 갚지 못할 위험, 금리 변화, 만기까지의 기간 등을 함께 봐야 해요.",
        final: true
      }
    ]
  },
  stock: {
    icon: "📈",
    name: "주식",
    desc: "기업의 일부를 소유하는 권리예요.",
    steps: [
      {
        kicker: "첫 번째 칸",
        title: "주식은 무엇일까요?",
        body: "주식은 기업의 소유권을 잘게 나눈 단위예요.<div class='key-box'>주식을 산다는 것은 그 기업의 일부를 소유하는 일이에요.</div>",
        choices: [
          { question: "주가는 왜 움직여?", answer: "기업의 미래에 대한 기대와 걱정이 계속 바뀌기 때문이에요." },
          { question: "배당은 뭐야?", answer: "기업이 번 돈의 일부를 주주에게 나눠주는 것이에요." }
        ]
      },
      {
        kicker: "두 번째 칸",
        title: "주가는 기대에 따라 움직여요.",
        body: "현재 실적뿐 아니라 앞으로의 성장 가능성, 금리, 경기, 투자자 심리까지 가격에 영향을 줘요.",
        choices: [
          { question: "좋은 회사면 주가도 항상 올라?", answer: "아니요. 이미 가격이 너무 높거나 기대가 낮아지면 떨어질 수 있어요." },
          { question: "실적 발표는 왜 중요해?", answer: "기업이 실제로 얼마나 벌고 성장했는지 확인할 수 있어서예요." }
        ]
      },
      {
        kicker: "세 번째 칸",
        title: "기업과 가격을 구분해서 봐야 해요.",
        body: "좋은 기업도 지나치게 비싼 가격에 사면 만족스러운 결과를 얻기 어려울 수 있어요. 기업의 질과 매수가격을 함께 보는 습관이 필요해요.",
        final: true
      }
    ]
  },
  inflation: {
    icon: "🛒",
    name: "물가",
    desc: "생활비가 왜 달라지는지 알아봐요.",
    steps: [
      {
        kicker: "첫 번째 칸",
        title: "물가가 오른다는 것은?",
        body: "같은 돈으로 살 수 있는 물건과 서비스가 줄어든다는 뜻이에요.<div class='key-box'>물가 상승은 돈의 구매력이 낮아지는 현상이에요.</div>",
        choices: [
          { question: "왜 물가가 올라?", answer: "수요가 늘거나 생산비가 오르면 가격도 올라가기 쉬워요." },
          { question: "임금도 같이 오르면 괜찮아?", answer: "임금 상승률이 물가 상승률보다 낮으면 구매력은 줄어들 수 있어요." }
        ]
      },
      {
        kicker: "두 번째 칸",
        title: "물가는 왜 오를까요?",
        body: "수요가 공급보다 빠르게 늘거나, 원재료·임금·운송비 같은 생산비가 오를 때 물가가 상승할 수 있어요.",
        choices: [
          { question: "금리와는 어떤 관계야?", answer: "금리를 올리면 소비와 투자가 줄어 물가를 진정시키는 데 도움이 될 수 있어요." },
          { question: "모든 물건이 똑같이 올라?", answer: "아니요. 품목마다 수요와 공급이 달라 상승 폭도 달라요." }
        ]
      },
      {
        kicker: "세 번째 칸",
        title: "체감 물가와 공식 물가는 다를 수 있어요.",
        body: "사람마다 자주 사는 품목이 다르기 때문에 공식 지표와 실제 생활에서 느끼는 부담이 다를 수 있어요.",
        final: true
      }
    ]
  }
};

const state = {
  topicKey: null,
  stepIndex: 0
};

const views = {
  welcome: document.getElementById("welcomeView"),
  lesson: document.getElementById("lessonView"),
  complete: document.getElementById("completeView"),
  records: document.getElementById("recordsView")
};

function showView(name) {
  Object.values(views).forEach(view => view.classList.remove("active"));
  views[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTopics() {
  const grid = document.getElementById("topicGrid");
  grid.innerHTML = Object.entries(lessons).map(([key, topic]) => `
    <button class="topic-btn" data-topic="${key}">
      <span>${topic.icon}</span>
      <strong>${topic.name}</strong>
      <small>${topic.desc}</small>
    </button>
  `).join("");

  grid.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", () => startTopic(btn.dataset.topic));
  });
}

function startTopic(topicKey) {
  state.topicKey = topicKey;
  state.stepIndex = 0;
  renderLesson();
  showView("lesson");
}

function renderBoard() {
  const topic = lessons[state.topicKey];
  const track = document.getElementById("boardTrack");
  track.innerHTML = topic.steps.map((step, index) => {
    const status = index < state.stepIndex ? "done" : index === state.stepIndex ? "active" : "";
    return `<div class="board-step ${status}">${index + 1}칸 · ${step.title}</div>`;
  }).join("");
  document.getElementById("progressText").textContent = `${state.stepIndex + 1} / ${topic.steps.length}`;
}

function renderLesson() {
  const topic = lessons[state.topicKey];
  const step = topic.steps[state.stepIndex];

  renderBoard();
  document.getElementById("lessonKicker").textContent = `${topic.icon} ${topic.name} · ${step.kicker}`;
  document.getElementById("lessonTitle").textContent = step.title;
  document.getElementById("lessonBody").innerHTML = step.body;

  const choiceArea = document.getElementById("choiceArea");
  const noteArea = document.getElementById("noteArea");
  noteArea.classList.add("hidden");
  choiceArea.innerHTML = "";

  if (step.final) {
    choiceArea.innerHTML = `<button class="choice-btn" id="writeNoteBtn">이제 내 말로 한 줄 정리해볼래요 →</button>`;
    document.getElementById("writeNoteBtn").addEventListener("click", () => {
      choiceArea.innerHTML = "";
      noteArea.classList.remove("hidden");
      document.getElementById("noteInput").focus();
    });
  } else {
    choiceArea.innerHTML = step.choices.map((choice, index) => `
      <button class="choice-btn" data-choice-index="${index}" data-revealed="false">
        <span class="choice-question">${choice.question}</span>
        <span class="choice-arrow">→</span>
        <span class="choice-answer" aria-live="polite"></span>
        <span class="choice-hint">한 번 누르면 짧은 답을 볼 수 있어요.</span>
      </button>
    `).join("");

    choiceArea.querySelectorAll(".choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const choice = step.choices[Number(btn.dataset.choiceIndex)];

        if (btn.dataset.revealed === "false") {
          choiceArea.querySelectorAll(".choice-btn").forEach(otherBtn => {
            if (otherBtn !== btn) {
              otherBtn.classList.remove("revealed");
              otherBtn.dataset.revealed = "false";
              otherBtn.querySelector(".choice-answer").textContent = "";
              otherBtn.querySelector(".choice-hint").textContent = "한 번 누르면 짧은 답을 볼 수 있어요.";
            }
          });

          btn.dataset.revealed = "true";
          btn.classList.add("revealed");
          btn.querySelector(".choice-answer").textContent = choice.answer;
          btn.querySelector(".choice-hint").textContent = "답을 확인했어요. 한 번 더 누르면 자세한 설명으로 넘어가요.";
          return;
        }

        btn.classList.add("moving");
        btn.querySelector(".choice-hint").textContent = "다음 설명을 여는 중이에요…";
        setTimeout(nextStep, 420);
      });
    });
  }
}

function nextStep() {
  const topic = lessons[state.topicKey];
  if (state.stepIndex < topic.steps.length - 1) {
    state.stepIndex += 1;
    renderLesson();
  }
}

function saveRecord(note) {
  const topic = lessons[state.topicKey];
  const records = JSON.parse(localStorage.getItem("whyInvestRecords") || "[]");
  records.unshift({
    topic: topic.name,
    icon: topic.icon,
    note,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem("whyInvestRecords", JSON.stringify(records));
}

function completeLesson() {
  const note = document.getElementById("noteInput").value.trim();
  if (!note) {
    alert("한 줄을 먼저 적어주세요.");
    return;
  }
  saveRecord(note);
  const topic = lessons[state.topicKey];
  document.getElementById("completeSummary").textContent = `${topic.name} 탐험을 끝냈어요.`;
  document.getElementById("savedNoteText").textContent = note;
  document.getElementById("noteInput").value = "";
  document.getElementById("charCount").textContent = "0 / 120";
  showView("complete");
}

function renderRecords() {
  const records = JSON.parse(localStorage.getItem("whyInvestRecords") || "[]");
  const list = document.getElementById("recordsList");

  if (!records.length) {
    list.innerHTML = `<div class="empty-state">아직 기록이 없어요.<br>첫 번째 지식 한 칸을 넓혀볼까요?</div>`;
    return;
  }

  list.innerHTML = records.map(record => {
    const date = new Date(record.createdAt).toLocaleString("ko-KR", {
      year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
    });
    return `
      <article class="record-item">
        <div class="meta">${record.icon} ${record.topic} · ${date}</div>
        <strong>${record.note}</strong>
      </article>
    `;
  }).join("");
}

document.getElementById("saveNoteBtn").addEventListener("click", completeLesson);
document.getElementById("noteInput").addEventListener("input", e => {
  document.getElementById("charCount").textContent = `${e.target.value.length} / 120`;
});
document.getElementById("backHomeBtn").addEventListener("click", () => showView("welcome"));
document.getElementById("anotherTopicBtn").addEventListener("click", () => showView("welcome"));
document.getElementById("reviewBtn").addEventListener("click", () => {
  renderRecords();
  showView("records");
});
document.getElementById("recordsNavBtn").addEventListener("click", () => {
  renderRecords();
  showView("records");
});
document.getElementById("recordsHomeBtn").addEventListener("click", () => showView("welcome"));
document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("저장된 학습 기록을 모두 지울까요?")) {
    localStorage.removeItem("whyInvestRecords");
    alert("기록을 초기화했어요.");
    showView("welcome");
  }
});

renderTopics();
showView("welcome");
