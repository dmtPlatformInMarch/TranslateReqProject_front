<template>
  <v-expansion-panel v-if="language === '한국어'">
    <v-expansion-panel-header class="panel__header" disable-icon-rotate>
      <div class="panel__header__id">
        <v-btn depressed icon @click="dialog = true">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="30vw">
          <v-card>
            <v-card-title>의뢰 취소</v-card-title>
            <v-card-text>해당 의뢰를 취소하시겠습니까?</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="dialog = false">취소</v-btn>
              <v-btn color="success" text @click="cancelRequest">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        의뢰ID : {{ p.id }}
      </div>

      <v-spacer />

      <div class="panel__header__date">
        <v-icon>mdi-calendar-clock</v-icon>
        {{ p.date }}
      </div>

      <v-spacer />

      <div class="pannel__header__state">
        <v-chip :color="stateColor(p.trans_state)" dark>
          {{ p.trans_state }}
          <v-icon right color="white"> {{ stateIcon(p.trans_state) }} </v-icon>
        </v-chip>
      </div>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-list v-for="(file, i) in mfFile" :key="file.id">
        <v-list-item class="itemStyle" dense>
          <v-chip class="chipStyle" label>
            {{ file.field }}
          </v-chip>

          <v-spacer />

          <div style="display: flex;">
            <v-spacer />
            <v-chip class="chipStyle">
              {{ file.req_lang }}
            </v-chip>
            <v-spacer />
            <v-icon>mdi-arrow-right-bold</v-icon>
            <v-spacer />
            <v-chip class="chipStyle">
              {{ file.grant_lang }}
            </v-chip>
          </div>
          <v-spacer />
          <div class="textStyle">
            <v-icon left> mdi-file-document-multiple </v-icon>
            {{ file.src.substring(file.src.lastIndexOf("/") + 1) }}
            <span v-if="countingFile[i] - 1 != 0">외 {{ countingFile[i] - 1 }}개의 파일</span>
          </div>
          <v-spacer />
          <v-list-item-icon class="iconStyle">
            <v-icon color="success"> mdi-check-circle </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>

    <!--v-btn @click="cle">지우기</v-btn-->
  </v-expansion-panel>

  <v-expansion-panel v-else-if="language === '영어'">
    <v-expansion-panel-header class="panel__header" disable-icon-rotate>
      <div class="panel__header__id">
        <v-btn depressed icon @click="dialog = true"><v-icon>mdi-close</v-icon></v-btn>
        <v-dialog v-model="dialog" width="30vw">
          <v-card>
            <v-card-title>Request Cancel</v-card-title>
            <v-card-text>Are you sure you want to cancel the quest?</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="dialog = false">No</v-btn>
              <v-btn color="success" text @click="cancelRequest">Yes</v-btn>
            </v-card-actions>
          </v-card> 
          </v-dialog>
          의뢰ID : {{ p.id }}
      </div>
      
      <v-spacer />
      
      <div class="panel__header__date">
        <v-icon>mdi-calendar-clock</v-icon>
        {{ p.date }}
      </div>

      <v-spacer />

      <div class="pannel__header__state">
        <v-chip :color="stateColor(p.trans_state)" dark>
          {{ p.trans_state }}
          <v-icon right color="white"> {{ stateIcon(p.trans_state) }} </v-icon>
        </v-chip>
      </div>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-divider />
      <v-list v-for="(file, i) in mfFile" :key="file.id">
        <v-list-item dense>
          <v-chip class="chipStyle" style="min-width: 10vw" label>
            {{ file.field }}
          </v-chip>
          <v-spacer />
          <div style="display: flex; width: 10vw">
            <v-spacer />
            <v-chip class="chipStyle">
              {{ file.req_lang }}
            </v-chip>
            <v-spacer />
            <v-icon>mdi-arrow-right-bold</v-icon>
            <v-spacer />
            <v-chip class="chipStyle">
              {{ file.grant_lang }}
            </v-chip>
          </div>
          <v-spacer />
          <div class="textStyle">
            <v-icon left> mdi-file-document-multiple </v-icon>
            {{ file.src.substring(file.src.lastIndexOf("/") + 1) }}
            <span v-if="countingFile[i] - 1 != 0">other {{ countingFile[i] - 1 }} files</span>
          </div>
          <v-spacer />
          <v-list-item-icon>
            <v-icon color="success"> mdi-check-circle </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>

    <!--v-btn @click="cle">지우기</v-btn-->
  </v-expansion-panel>

  <v-expansion-panel v-else>
    <div class="text-h1">페이지 로드 에러</div>
  </v-expansion-panel>
</template>

<style scoped>
.panel__header__id {
  display: flex;
  align-items: center;
}
.panel__header__date {
  display: flex;
  align-items: center;
}
.chipStyle {
  justify-content: center;
  min-width: 75px;
}
.textStyle {
  display: flex; 
  width: 30vw;
}
.iconStyle {
  margin: 8px 0 !important;
}

@media screen and (max-width: 700px) {
  ::v-deep .v-expansion-panel-content__wrap {
    padding: 0 !important;
  }
  .panel__header {
    padding: 8px !important;
  }
  .panel__header__id {
    font-size: 10px;
  }
  .panel__header__date {
    font-size: 10px;
  }
  .pannel__header__state ::v-deep .v-chip__content {
    font-size: 10px;
  }
  .pannel__header__state ::v-deep .v-icon {
    font-size: 14px;
  }
  .panel__header__date ::v-deep .v-icon {
    font-size: 14px;
  }
  .textStyle {
    display: none; 
  }
}
</style>

<script>
export default {
  props: {
    p: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      FileSet: this.p.Files,
      dialog: false,
    };
  },
  computed: {
    sortingFile() {
      return Array.from(this.FileSet).sort(function (a, b) {
        return a.chainNumber - b.chainNumber;
      });
    },
    mfFile() {
      return Array.from(this.FileSet).filter((item, i) => {
        return (
          Array.from(this.FileSet).findIndex((item2, j) => {
            return item.chainNumber === item2.chainNumber;
          }) === i
        );
      });
    },
    countingFile() {
      const array = [];
      Array.from(this.FileSet).forEach((f) => {
        array[f["chainNumber"]] = (array[f["chainNumber"]] || 0) + 1;
      });
      const result = array.reverse();
      return result;
    },
    language() {
      return this.$store.state.manager.language;
    },
  },
  methods: {
    async cancelRequest() {
      try {
        const deleteResponse = await this.$store.dispatch("requests/cancelRequest", {
          id: this.p.id,
        });
        if (deleteResponse.data === "삭제") {
          if (this.language === "한국어") {
            this.$manage.showMessage({
              message: "의뢰를 성공적으로 취소했습니다.",
              color: "success",
            });
          } else if (this.language === "영어") {
            this.$manage.showMessage({
              message: "Successfully canceled the quest.",
              color: "success",
            });
          }
        } else {
          if (this.language === "한국어") {
            this.$manage.showMessage({
              message: "의뢰를 취소하는데 문제가 발생했습니다.",
              color: "error",
            });
          } else if (this.language === "영어") {
            this.$manage.showMessage({
              message: "Oops..Problem during cancel the quest.",
              color: "error",
            });
          }
        }
        await this.$store.dispatch("requests/loadRequests");
        this.dialog = false;
      } catch (err) {}
    },
    stateIcon(state) {
      if (state === '번역 준비중') return "mdi-briefcase-clock";
      else if (state === '번역 시작') return "mdi-briefcase-edit";
      else if (state === '번역 검수중') return "mdi-briefcase-search";
      else if (state === '번역 완료') return "mdi-briefcase-check";
      else return "mdi-briefcase-off";
    },
    stateColor(state) {
      if (state === '번역 준비중') return "orange";
      else if (state === '번역 시작') return "primary";
      else if (state === '번역 검수중') return "indigo";
      else if (state === '번역 완료') return "success";
      else return "grey";
    }
  },
};
</script>