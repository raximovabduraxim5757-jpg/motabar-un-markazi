import os
import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# Logging sozlamalari
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Muhim o'zgaruvchilar
BOT_TOKEN = os.environ.get('BOT_TOKEN', 'YOUR_BOT_TOKEN_HERE')
WEB_APP_URL = os.environ.get('WEB_APP_URL', 'https://your-site.netlify.app')

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Start komandasi"""
    user = update.effective_user
    first_name = user.first_name if user.first_name else "aziz"
    
    # Tugmalar
    keyboard = [
        [InlineKeyboardButton("🚀 Zakaz berish", web_app={"url": WEB_APP_URL})],
        [InlineKeyboardButton("📞 Aloqa", url="https://t.me/optom_unchi")],
        [InlineKeyboardButton("📢 Kanal", url="https://t.me/motabar_andijon")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    # Xabar
    await update.message.reply_text(
        f"👋 Assalomu alaykum, {first_name}!\n\n"
        "🏪 Mo'tabar Un Markazi - Andijon viloyatida joylashgan, eng sifatli va arzon un mahsulotlarini yetkazib beruvchi va sotuvchi markaz sizning xizmatingizda!\n\n"
        "🛒 Pastdagi tugma orqali zakaz berishingiz mumkin.",
        reply_markup=reply_markup
    )

def main():
    """Botni ishga tushirish"""
    app = Application.builder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    
    logger.info("🚀 Bot ishga tushdi...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
