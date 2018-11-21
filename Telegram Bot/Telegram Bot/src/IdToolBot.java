//Basic Telegram Bot
//https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started

//Inline keyboards and editing message's text
//https://github.com/MonsterDeveloper/java-telegram-bot-tutorial/blob/master/lesson-6.-inline-keyboards-and-editing-message's-text.md

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.methods.updatingmessages.EditMessageText;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.toIntExact;

public class IdToolBot extends TelegramLongPollingBot {

    @Override
    public void onUpdateReceived(Update update) {
        // We check if the update has a message and the message has text
        if (update.hasMessage() && update.getMessage().hasText()) {
            String receivedMsg=update.getMessage().getText(),sendMsg="";
            receivedMsg=receivedMsg.toLowerCase();

            SendMessage message=null;
            if(receivedMsg.matches("hi") || receivedMsg.matches("hello") || receivedMsg.matches("hallo")){
                sendMsg="Hi there \uD83D\uDE42\nHow can I help you?";
                message = new SendMessage()
                        .setChatId(update.getMessage().getChatId())
                        .setText(sendMsg);
            }
            else if(receivedMsg.contains("contact") || receivedMsg.contains("kontakt")){
                message = new SendMessage()
                        .setChatId(update.getMessage().getChatId())
                        .setText("Select the office:");

                InlineKeyboardMarkup markupInline = new InlineKeyboardMarkup();
                List<List<InlineKeyboardButton>> rowsInline = new ArrayList<>();
                List<InlineKeyboardButton> rowInline = new ArrayList<>();
                rowInline.add(new InlineKeyboardButton().setText("Bürgeramt").setCallbackData("burgeramt_contact"));
                rowInline.add(new InlineKeyboardButton().setText("Finanzamt").setCallbackData("finanzamt_contact"));
                rowsInline.add(rowInline);
                markupInline.setKeyboard(rowsInline);
                message.setReplyMarkup(markupInline);
            }
            else if(receivedMsg.contains("location") || receivedMsg.contains("address")){
                message = new SendMessage()
                        .setChatId(update.getMessage().getChatId())
                        .setText("Select the office:");

                InlineKeyboardMarkup markupInline = new InlineKeyboardMarkup();
                List<List<InlineKeyboardButton>> rowsInline = new ArrayList<>();
                List<InlineKeyboardButton> rowInline = new ArrayList<>();
                rowInline.add(new InlineKeyboardButton().setText("Bürgeramt").setCallbackData("burgeramt_location"));
                rowInline.add(new InlineKeyboardButton().setText("Finanzamt").setCallbackData("finanzamt_location"));
                rowsInline.add(rowInline);
                markupInline.setKeyboard(rowsInline);
                message.setReplyMarkup(markupInline);
            }
            else{
                sendMsg="Sorry. I can't help you with that.";
                message = new SendMessage()
                        .setChatId(update.getMessage().getChatId())
                        .setText(sendMsg);
            }

            try {
                execute(message); // Call method to send the message

            } catch (TelegramApiException e) {
                e.printStackTrace();
            }
        }else if (update.hasCallbackQuery()) {
            String call_data = update.getCallbackQuery().getData();
            long message_id = update.getCallbackQuery().getMessage().getMessageId();
            long chat_id = update.getCallbackQuery().getMessage().getChatId();

            String answer="";
            if (call_data.equals("burgeramt_contact")) {
                answer = "Bürgeramt Phone: 030123456";
            }
            else if (call_data.equals("finanzamt_contact")) {
                answer = "Finanzamt Phone: 030987654";
            }
            else if (call_data.equals("burgeramt_location")) {
                answer = "Bürgeramt Address: Messedamm 26, 14055 Berlin\nhttps://goo.gl/maps/Exw3caSz6Mm";
            }
            else if (call_data.equals("finanzamt_location")) {
                answer = "Finanzamt Address: Messedamm 26, 14055 Berlin\nhttps://goo.gl/maps/Exw3caSz6Mm";
            }

            EditMessageText new_message = new EditMessageText()
                    .setChatId(chat_id)
                    .setMessageId(toIntExact(message_id))
                    .setText(answer);
            try {
                execute(new_message);
            } catch (TelegramApiException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public String getBotUsername() {
        return "idtool_bot";
    }

    @Override
    public String getBotToken() {
        return "760475031:AAG84cQHfbchyj7msJFYEPPMpeybHdFcYOw";
    }
}
