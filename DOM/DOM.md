Of course! Here are crisp, last-minute notes for your interview.

---

### **DOM & Event Handling - Cheat Sheet**

#### **DOM Selection (Finding Elements)**

- **`querySelector('.class')` / `querySelector('#id')`**
  - Finds the **first** matching element. Use any CSS selector.
- **`querySelectorAll('.class')`**
  - Finds **ALL** matching elements. Returns a NodeList (like an array).
- **`getElementById('id')`**
  - Fast, old-school. Only for IDs.

#### **Event Handling (Making it Interactive)**

- **Syntax:** `element.addEventListener('event', callbackFunction);`
- **Common Events:** `'click'`, `'submit'`, `'keydown'`, `'mouseover'`, `'change'`.
- **The `event` object:** Contains info about the event (e.g., `event.target` is what was clicked).

#### **Key Differences**

- **`textContent` vs `innerHTML`**
  - `textContent`: Gets/sets plain text. Safer.
  - `innerHTML`: Gets/sets HTML content. Powerful but risky (XSS vulnerability).
- **Event Bubbling vs Capturing**
  - **Bubbling (default):** Event goes from target element up to the root.
  - **Capturing:** Event goes from root down to the target.

#### **Important Methods**

- **`event.preventDefault()`**
  - Stops default browser behavior (e.g., form submission, link navigation).
- **`event.stopPropagation()`**
  - Stops the event from bubbling up to parent elements.
- **Event Delegation**
  - Attach listener to a **parent**. Check `event.target`.
  - **Use for:** Dynamic elements or performance (fewer listeners).

#### **Quick Example**

```javascript
// Select button, listen for click, change paragraph text
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  document.querySelector("#text").textContent = "Changed!";
});
```

### **LocalStorage vs SessionStorage vs Cookies - Cheat Sheet**

#### **At a Glance**

- **Cookies:** For server-side use (~4KB). Sent with every request.
- **LocalStorage:** For client-side use (~5MB). Permanent.
- **SessionStorage:** For client-side use (~5MB). Lasts only for the **tab session**.

---

#### **Key Differences**

| Feature                  | Cookies             | LocalStorage    | SessionStorage   |
| :----------------------- | :------------------ | :-------------- | :--------------- |
| **Capacity**             | **~4 KB**           | ~5-10 MB        | ~5-10 MB         |
| **Persistence**          | Manual expiry date  | Until deleted   | **Tab closed**   |
| **Accessible by Server** | **Yes** (Auto-sent) | No              | No               |
| **Scope**                | Domain, Path        | Origin (Domain) | **Origin + Tab** |

---

#### **When to Use What?**

- **Use Cookies for:** Authentication (Session IDs), Server-side tracking.
- **Use LocalStorage for:** User preferences (theme, settings), Offline data.
- **Use SessionStorage for:** Temporary data (form progress, single-use info).

---

#### **API & Code Snippets**

**Cookies**

```javascript
// Set (with expiry)
document.cookie = "user=John; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// Read (returns all cookies as a string)
console.log(document.cookie);
```

**LocalStorage / SessionStorage**

```javascript
// Set
localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");

// Get
const data = localStorage.getItem("key");

// Remove
localStorage.removeItem("key");

// Clear all
localStorage.clear();
```

_Remember: They only store strings. Use `JSON.stringify()` and `JSON.parse()` for objects._

---

#### **Critical Security Notes**

- **Cookies:** Use `HttpOnly` and `Secure` flags for sensitive data to prevent XSS and ensure HTTPS-only transmission.
- **LocalStorage/SessionStorage:** Vulnerable to XSS attacks. **Never store secrets** (tokens, passwords) here.

---

#### **Common Interview Gotchas**

1.  **"How does SessionStorage behave with multiple tabs?"**

    > Each tab has its own isolated SessionStorage. Duplicating a tab copies it, but then they are independent.

2.  **"Why wouldn't you use LocalStorage for a session token?"**

    > Because it's vulnerable to XSS attacks and the token isn't automatically sent to the server like a cookie is.

3.  **"What's the impact of cookies on performance?"**
    > They increase the size of every HTTP request, which can slow down page loads.
