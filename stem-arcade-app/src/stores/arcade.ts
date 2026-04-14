import { defineStore } from 'pinia';

export const useArcadeStore = defineStore('arcade', {
  state: () => ({
    license: JSON.parse(localStorage.getItem('arcade_license') || 'null'),
    stemXp: parseInt(localStorage.getItem('arcade_xp') || '0'),
    games: [
      { id: 'storm-chaser', title: 'Storm Chaser', emoji: '🌪️', category: 'Nature', path: '../mge-storm-chaser.html' },
      { id: 'lunar-architect', title: 'Lunar Architect', emoji: '🚀', category: 'Space', path: '../mge-lunar-architect.html' },
      { id: 'sonic-speed', title: 'Sonic Speed', emoji: '🦔', category: 'Physics', path: '../mge-sonic-speed.html' },
      { id: 'fps-striker', title: 'FPS Striker', emoji: '🎯', category: 'Logic', path: '../mge-fps-striker.html' },
      { id: 'robot-path', title: 'Robot Path Planner', emoji: '🤖', category: 'Logic', path: '../mge-robot-path-planner.html' },
      { id: 'aqua-genesis', title: 'Aqua Genesis', emoji: '🌊', category: 'Science', path: '../mge-aqua-genesis.html' }
    ]
  }),
  actions: {
    setLicense(data: any) {
      this.license = data;
      localStorage.setItem('arcade_license', JSON.stringify(data));
    },
    addXp(amount: number) {
      this.stemXp += amount;
      localStorage.setItem('arcade_xp', this.stemXp.toString());
    },
    logout() {
      this.license = null;
      localStorage.removeItem('arcade_license');
    }
  }
});
