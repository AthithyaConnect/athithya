export const handleImageUpload = (e, setImage) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  }
};

export const toggleLanguage = (lang, setLanguages) => {
  setLanguages((prev) =>
    prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang],
  );
};
