import React, { useState, useRef } from "react";

const InputWithPreviousValue: React.FC = () => {
  // Створюємо стан для збереження поточного значення текстового поля
  const [currentValue, setCurrentValue] = useState("");
  // Використовуємо ref для збереження попереднього значення
  const previousValueRef = useRef<string>("");

  // Функція для обробки зміни текстового поля
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Оновлюємо значення ref на попереднє значення перед тим, як оновлювати стан
    previousValueRef.current = currentValue;
    // Оновлюємо стан для збереження поточного значення
    setCurrentValue(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Збереження попереднього значення</h1>
      <input
        type="text"
        value={currentValue}
        onChange={handleInputChange}
        placeholder="Введіть текст"
        style={{ padding: "10px", fontSize: "16px", width: "250px" }}
      />
      <p style={{ marginTop: "20px" }}>
        Поточне значення: <strong>{currentValue}</strong>
      </p>
      <p>
        Попереднє значення: <strong>{previousValueRef.current}</strong>
      </p>
    </div>
  );
};

export default InputWithPreviousValue;
