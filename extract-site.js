const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  console.log('Загрузка сайта...');
  await page.goto('https://alitdevops.netlify.app/', {
    waitUntil: 'networkidle0',
    timeout: 30000
  });
  
  console.log('Извлечение HTML...');
  const html = await page.content();
  fs.writeFileSync('extracted_html.html', html);
  
  console.log('Извлечение структуры компонентов...');
  const structure = await page.evaluate(() => {
    const root = document.getElementById('root');
    if (!root) return null;
    
    function extractStructure(element, depth = 0) {
      if (depth > 10) return null; // Ограничение глубины
      
      const result = {
        tag: element.tagName.toLowerCase(),
        className: element.className || '',
        id: element.id || '',
        text: element.textContent?.trim().substring(0, 100) || '',
        children: []
      };
      
      Array.from(element.children).forEach(child => {
        const childStructure = extractStructure(child, depth + 1);
        if (childStructure) {
          result.children.push(childStructure);
        }
      });
      
      return result;
    }
    
    return extractStructure(root);
  });
  
  fs.writeFileSync('extracted_structure.json', JSON.stringify(structure, null, 2));
  
  console.log('Извлечение стилей...');
  const styles = await page.evaluate(() => {
    const styleSheets = [];
    Array.from(document.styleSheets).forEach((sheet, index) => {
      try {
        Array.from(sheet.cssRules || []).forEach(rule => {
          if (rule.cssText) {
            styleSheets.push(rule.cssText);
          }
        });
      } catch (e) {
        // Игнорируем CORS ошибки
      }
    });
    return styleSheets.join('\n');
  });
  
  fs.writeFileSync('extracted_styles.css', styles);
  
  console.log('Готово!');
  await browser.close();
})();

