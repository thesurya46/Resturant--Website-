import { useCallback } from 'react';
import { toast } from 'sonner';

// Create a simple beep sound using Web Audio API
const playNotificationSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Pleasant notification sound - ascending tone
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.2);

    // Volume envelope
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (error) {
    console.log('Audio not supported');
  }
};

// Play a different sound for order confirmation
const playOrderConfirmationSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a sequence of tones for celebration
    const frequencies = [523, 659, 784, 1047]; // C5, E5, G5, C6
    
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.15);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + index * 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.15 + 0.3);
      
      oscillator.start(audioContext.currentTime + index * 0.15);
      oscillator.stop(audioContext.currentTime + index * 0.15 + 0.3);
    });
  } catch (error) {
    console.log('Audio not supported');
  }
};

interface UseNotificationReturn {
  notifyAddToCart: (itemName: string) => void;
  notifyOrderPlaced: (orderId: string) => void;
  notifyError: (message: string) => void;
}

export function useNotification(): UseNotificationReturn {
  const notifyAddToCart = useCallback((itemName: string) => {
    playNotificationSound();
    toast.success(`${itemName} added to cart!`, {
      duration: 2000,
      position: 'bottom-right',
      style: {
        background: '#f97316',
        color: 'white',
        border: 'none',
      },
    });
  }, []);

  const notifyOrderPlaced = useCallback((orderId: string) => {
    playOrderConfirmationSound();
    toast.success(`Order #${orderId} placed successfully!`, {
      duration: 5000,
      position: 'top-center',
      style: {
        background: '#22c55e',
        color: 'white',
        border: 'none',
      },
    });
  }, []);

  const notifyError = useCallback((message: string) => {
    toast.error(message, {
      duration: 4000,
      position: 'top-center',
    });
  }, []);

  return {
    notifyAddToCart,
    notifyOrderPlaced,
    notifyError,
  };
}
