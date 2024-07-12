const DOMUtils = {
  // Select single element
  selector(query) {
    return document.querySelector(query);
  },

  // Select multiple elements
  selectorAll(query) {
    return document.querySelectorAll(query);
  },

  // Create an element
  createElement(tagName) {
    return document.createElement(tagName);
  },

  // Append a child element to a parent
  appendChild(parent, child) {
    parent.appendChild(child);
  },

  // Remove an element
  removeElement(element) {
    element.parentNode.removeChild(element);
  },

  // Add a class to an element
  addClass(element, className) {
    element.classList.add(className);
  },

  // Remove a class from an element
  removeClass(element, className) {
    element.classList.remove(className);
  },

  // Check if an element has a class
  hasClass(element, className) {
    return element.classList.contains(className);
  },

  // Toggle a class on an element
  toggleClass(element, className) {
    element.classList.toggle(className);
  },

  // Add an event listener to an element
  addEventListener(element, event, handler) {
    element.addEventListener(event, handler);
  },

  // Remove an event listener from an element
  removeEventListener(element, event, handler) {
    element.removeEventListener(event, handler);
  },

  // Set innerHTML of an element
  setInnerHTML(element, html) {
    element.innerHTML = html;
  },

  // Get innerHTML of an element
  getInnerHTML(element) {
    return element.innerHTML;
  },

  // Set textContent of an element
  setTextContent(element, text) {
    element.textContent = text;
  },

  // Get textContent of an element
  getTextContent(element) {
    return element.textContent;
  },

  // Set an attribute of an element
  setAttribute(element, attr, value) {
    element.setAttribute(attr, value);
  },

  // Get an attribute of an element
  getAttribute(element, attr) {
    return element.getAttribute(attr);
  },

  // Remove an attribute from an element
  removeAttribute(element, attr) {
    element.removeAttribute(attr);
  },

  // Set a style property of an element
  setStyle(element, property, value) {
    element.style[property] = value;
  },

  // Get a style property of an element
  getStyle(element, property) {
    return getComputedStyle(element)[property];
  },

  // Hide an element
  hideElement(element) {
    element.style.display = 'none';
  },

  // Show an element
  showElement(element, displayStyle = 'block') {
    element.style.display = displayStyle;
  },

  // Clone an element
  cloneElement(element, deep = true) {
    return element.cloneNode(deep);
  },

  // Insert an element before another element
  insertBefore(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement);
  },

  // Insert an element after another element
  insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
  },

  // Replace an element with another element
  replaceElement(newElement, oldElement) {
    oldElement.parentNode.replaceChild(newElement, oldElement);
  },

  // Get parent element
  getParent(element) {
    return element.parentNode;
  },

  // Get child elements
  getChildren(element) {
    return element.children;
  },

  // Get next sibling
  getNextSibling(element) {
    return element.nextElementSibling;
  },

  // Get previous sibling
  getPreviousSibling(element) {
    return element.previousElementSibling;
  },

  // Check if an element matches a selector
  matchesSelector(element, selector) {
    return element.matches(selector);
  },

  // Find closest ancestor matching a selector
  closest(element, selector) {
    return element.closest(selector);
  },

  // Get all descendants matching a selector
  findDescendants(element, selector) {
    return element.querySelectorAll(selector);
  },

  // Set multiple attributes
  setAttributes(element, attrs) {
    for (let key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        element.setAttribute(key, attrs[key]);
      }
    }
  },

  // Get the value of a form element
  getValue(element) {
    return element.value;
  },

  // Set the value of a form element
  setValue(element, value) {
    element.value = value;
  },

  // Check if an element is visible
  isVisible(element) {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
  },

  // Scroll an element into view
  scrollIntoView(element, options) {
    element.scrollIntoView(options);
  },

  // Add multiple classes
  addClasses(element, classes) {
    classes.forEach(cls => element.classList.add(cls));
  },

  // Remove multiple classes
  removeClasses(element, classes) {
    classes.forEach(cls => element.classList.remove(cls));
  },

  // Set multiple styles
  setStyles(element, styles) {
    for (let property in styles) {
      if (styles.hasOwnProperty(property)) {
        element.style[property] = styles[property];
      }
    }
  },

  // Get the computed style of an element
  getComputedStyle(element, property) {
    return window.getComputedStyle(element).getPropertyValue(property);
  },

  // Fade in an element
  fadeIn(element, duration = 400) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let last = +new Date();
    let tick = function() {
      element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
      last = +new Date();

      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  },

  // Fade out an element
  fadeOut(element, duration = 400) {
    element.style.opacity = 1;

    let last = +new Date();
    let tick = function() {
      element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
      last = +new Date();

      if (+element.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      } else {
        element.style.display = 'none';
      }
    };
    tick();
  },

  // Toggle visibility
  toggleVisibility(element) {
    if (element.style.display === 'none' || window.getComputedStyle(element).display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
};

export { DOMUtils };
// Example usage:
// const element = DOMUtils.selector('#myElement');
// DOMUtils.addClass(element, 'active');
