import { Document, Packer, Paragraph, TextRun, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

export const exportToDocx = async (text: string, fileName: string = 'extracted-text.docx') => {
  if (!text.trim()) {
    // Handle cases where text might be only whitespace or empty
    text = "(No text extracted or text is empty)";
  }

  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [new TextRun(text)],
          bidirectional: true, // Enable bidirectional text support
          alignment: AlignmentType.RIGHT, // Default alignment for Arabic text
        }),
      ],
    }],
  });

  try {
    const blob = await Packer.toBlob(doc);
    saveAs(blob, fileName);
    return true;
  } catch (error) {
    console.error("Error generating DOCX:", error);
    return false;
  }
};
