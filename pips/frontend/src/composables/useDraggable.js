import { ref, onMounted, onUnmounted } from 'vue'

export function useDraggable(elRef, initialPos = { x: 0, y: 0 }, storageKey = null) {
  const position = ref(initialPos)
  const isDragging = ref(false)
  const startMousePos = { x: 0, y: 0 }
  const startElPos = { x: 0, y: 0 }

  // Load from storage if available
  if (storageKey) {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        position.value = JSON.parse(saved)
      } catch (e) {
        console.error('Failed to load position from storage', e)
      }
    }
  }

  function onMouseDown(e) {
    // Only drag with left mouse button
    if (e.button !== 0) return
    
    // Don't drag if clicking on an input or button
    if (['INPUT', 'BUTTON', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return

    isDragging.value = true
    startMousePos.x = e.clientX
    startMousePos.y = e.clientY
    startElPos.x = position.value.x
    startElPos.y = position.value.y

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    
    // Prevent text selection while dragging
    e.preventDefault()
  }

  function onMouseMove(e) {
    if (!isDragging.value) return

    const dx = e.clientX - startMousePos.x
    const dy = e.clientY - startMousePos.y

    position.value = {
      x: startElPos.x + dx,
      y: startElPos.y + dy
    }
  }

  function onMouseUp() {
    isDragging.value = false
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)

    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(position.value))
    }
  }

  function resetPosition() {
    position.value = initialPos
    if (storageKey) {
      localStorage.removeItem(storageKey)
    }
  }

  const dragStyles = (baseStyles = {}) => ({
    ...baseStyles,
    position: 'fixed',
    transform: `translate(${position.value.x}px, ${position.value.y}px)`,
    cursor: isDragging.value ? 'grabbing' : 'grab',
    transition: isDragging.value ? 'none' : 'transform 0.1s ease-out'
  })

  return {
    position,
    isDragging,
    onMouseDown,
    dragStyles,
    resetPosition
  }
}
