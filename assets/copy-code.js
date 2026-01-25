(function() {
  'use strict';

  // 等待DOM加载完成
  function initCopyButtons() {
    const codeBlocks = document.querySelectorAll('.code-block-container');
    
    codeBlocks.forEach(function(container) {
      const button = container.querySelector('.copy-code-button');
      if (!button) return;

      // 查找代码内容
      const codeElement = container.querySelector('pre code') || container.querySelector('code');
      if (!codeElement) return;

      // 获取代码文本（去除行号）
      function getCodeText() {
        // 如果是Chroma高亮的代码块（带行号表格）
        const lineTable = container.querySelector('.chroma.lntable');
        if (lineTable) {
          const codeCell = lineTable.querySelector('td:last-child code');
          if (codeCell) {
            return codeCell.textContent || codeCell.innerText;
          }
        }
        
        // 普通代码块
        return codeElement.textContent || codeElement.innerText;
      }

      // 复制到剪贴板
      async function copyToClipboard(text) {
        try {
          // 使用现代Clipboard API
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
          } else {
            // 降级方案：使用传统方法
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
              const successful = document.execCommand('copy');
              document.body.removeChild(textArea);
              return successful;
            } catch (err) {
              document.body.removeChild(textArea);
              return false;
            }
          }
        } catch (err) {
          console.error('复制失败:', err);
          return false;
        }
      }

      // 显示成功提示
      function showSuccess() {
        const copyText = button.querySelector('.copy-text');
        const copySuccess = button.querySelector('.copy-success');
        
        if (copyText) copyText.style.display = 'none';
        if (copySuccess) copySuccess.style.display = 'inline';
        
        button.classList.add('copied');
        
        // 2秒后恢复
        setTimeout(function() {
          if (copyText) copyText.style.display = 'inline';
          if (copySuccess) copySuccess.style.display = 'none';
          button.classList.remove('copied');
        }, 2000);
      }

      // 绑定点击事件
      button.addEventListener('click', async function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const codeText = getCodeText();
        if (!codeText) return;
        
        const success = await copyToClipboard(codeText);
        if (success) {
          showSuccess();
        } else {
          // 复制失败提示（可选）
          console.warn('复制失败，请手动选择文本复制');
        }
      });
    });
  }

  // DOM加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyButtons);
  } else {
    initCopyButtons();
  }
})();
