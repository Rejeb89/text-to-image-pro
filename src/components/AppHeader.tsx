import { FileText } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="w-full py-6 bg-card shadow-md">
      <div className="container mx-auto flex items-center justify-center">
        <FileText className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-3xl font-headline font-bold text-primary">
        Text Capture Pro
        </h1>
      </div>
    </header>
  );
}
