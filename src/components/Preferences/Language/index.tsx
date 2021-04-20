import React from "react";
import i18next from "i18next";
import { Trans, useTranslation } from "react-i18next";
import { Col, Row, Select, Typography } from "antd";
import { LOCALSTORAGE_KEYS } from "api/contexts/Preferences";

const { Option } = Select;
const { Text } = Typography;
interface Props {
  isDetailed?: boolean;
}

const LanguagePreferences: React.FC<Props> = ({ isDetailed }) => {
  const { t } = useTranslation();

  return (
    <Row>
      <Col xs={isDetailed ? 24 : undefined}>
        <Text className={isDetailed ? "preference-detailed-title" : ""}>
          {t("preferences.language")}
        </Text>
      </Col>
      {isDetailed ? (
        <Col xs={16}>
          <Text>
            <Trans
              i18nKey="preferences.languageDetailed"
              style={{ marginLeft: "12px" }}
            >
              <a
                href="https://github.com/running-coder/nanolooker/tree/master/src/utils/locales"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("preferences.contribute")}
              </a>
            </Trans>
          </Text>
        </Col>
      ) : null}

      <Col xs={isDetailed ? 8 : undefined} style={{ textAlign: "right" }}>
        <Select
          value={i18next.language}
          onChange={value => {
            i18next.changeLanguage(value);
            localStorage.setItem(LOCALSTORAGE_KEYS.LANGUAGE, value);
          }}
          style={{ minWidth: "140px" }}
        >
          <Option value="en">English</Option>
          <Option value="fr">Français</Option>
          <Option value="es">Español</Option>
          <Option value="ar">العربية</Option>
          <Option value="de">Deutsch</Option>
          <Option value="hi">हिन्दी</Option>
          <Option value="it">Italiano</Option>
          <Option value="ja">日本語</Option>
          <Option value="ko">한국어</Option>
          <Option value="nl">Nederlands</Option>
          <Option value="pt">Português</Option>
          <Option value="ru">Pусский</Option>
          <Option value="zh">中文</Option>
        </Select>
      </Col>
    </Row>
  );
};

export default LanguagePreferences;
