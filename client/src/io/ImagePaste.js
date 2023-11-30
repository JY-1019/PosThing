const imagePaste = (e) => {
  const items = (e.clipboardData || e.originalEvent.clipboardData).items;
  for (const item of items) {
    if (item.type.indexOf("image") !== -1) {
      const blob = item.getAsFile();
      const imageUrl = URL.createObjectURL(blob);
      // 여기서 imageUrl을 상태에 저장하거나 이미지를 표시할 수 있습니다.
      console.log("이미지 URL:", imageUrl);
    }
  }
};

export { imagePaste };
