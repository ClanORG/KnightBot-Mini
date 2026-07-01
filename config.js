/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rFmOamXCI6YkRFUFEQFOmNeSihwBIErAIEJ/z3DezpmXnYne19q0qozJPnnMzvIC8wRUvUAfU7KAluYIX6Y9WVCKhAq+MYETAAEawgUAE7OzN5XSsO2vk7LwvNahFupHTrbxTLqKzknnvnfGhd7n74Ch4DUNbHDId/SLgXJra150YTf7Vwrn7o3BhRnola6u1TspPs0sFrxswOQ856BY8+I8QE58msPKELIjBbos6GmHwO/sjGXNJanGHox/Ve7/Z61ymGlzVsZzDc5cBwq6GvoclLbn4O/rQ5alaRkFN64G4HV9RcxWtK3o02PBwecLlRBCMVyQrx9B0+xUmOIjNCeYWr7tO8pyvJ8CA04liL5krGb+PMhoHIl+nautJNopX6boOndXEJPge8Hh2X7jwLFpo40iZwnDc485jTtqPX7bQ4xCMzmUerpcd67O/AbfLhlfT/8H4zlNozFVm0dshKl4ZbbcJ5q139ibF/qyackC6WmIn2ju98Dj4/k2GJDhPh5NJ71Sm3QzuRdxKqmjyV47w0w+blpB89/WT+gg+rmvwJpb/RKS5bejV2F7SVYW7OWvuNOo6EkTCTydme10l4K3hm5Ice2W92a1ZyISFDF5mbl9zeSgsO4qaJ9V0px1NHKdvp+PXZUYo6MwIq9xgAghJMKwIrXOR9TOYGAEaNi0KCqie7wBMsxmgdZiixNm+5pMuJf+4k4ay0ejx/OSXi0RNa5O8s+RUMQEmKEFGKIgPTqiCdhSiFCaJA/evbAOSord5166sJ3ADEmNBql9dlVsDoQ9SPjzAMizqv3C4PJ/0BEaCyv8KoqnCe0J7GOockPOEGTU6wokCNYUbRzwYRQRFQK1Kjn0M7KaKe94MicLYhKmAALk89cARUMBQVQZR5QWJFdqgqX+mXW58WluWXHFVgAHLY/w0s8uWMaE3BAGTPhyNuJI2EIccJ3GgkqsrXPvz4ibgvEKEK4owCFUxM3i5OhdPEzJZNgmDcjcfL8bhn8aPDD6e8S6Ek61mSX6fouBR257OnB83MjuaidpqVkn0di/U+3DPu3Z3O/ikJUEFXuhuLyN0yg7OMD3xdaspW0dKFbdpvCEcLmYfsDQ8t6s42DTuE4n51dYrVncHikOtC/k0RUXEvCT0HopmbIb86jW+vfbUINThEvxercVqasyDQvZEcBllbyvvl0vPNQNzukHZYz/lr6HRvW91XqL6G0n275/ZBN7Uu0r15U3zWfXOvJ6G9Mrrjb5jmuh2WWvLu4ecMZT92F37aq9euv8YYPVfBD43+U8t34L3l2Mfgtxw/lsu/DKgWB9OtuRglwqWrOFNkW3/VToVtPQ62S3QfJZtVdtDjlLJJCx6PbwNQZrCKC3IBKqCXIwQDQIq6N7CZx8UfKk0009ScZNK3nUFajX8NhYcviFbwUgKVk2RelkR2yD7+Bus4G4RJBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
