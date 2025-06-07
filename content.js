function salvarComoMarkdown() {
    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(document.body.innerHTML);
  
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = document.title.replace(/\s+/g, "_") + ".md";
    a.click();
  }
  
  salvarComoMarkdown();
  