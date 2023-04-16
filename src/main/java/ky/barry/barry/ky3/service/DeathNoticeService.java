package ky.barry.barry.ky3.service;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.DomElement;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import ky.barry.barry.ky3.domain.DeathNotice;
import ky.barry.barry.ky3.domain.RipResponse;
import ky.barry.barry.ky3.utils.DeathNoticeUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Slf4j
@Component
public class DeathNoticeService {
    final String baseDeathNoticeURL = "https://rip.ie/death-notice/";
    public List<DeathNotice> getDeathNoticesForCountyAndSearchText(String county, String searchText, String dateFrom, String dateTo) throws IOException {
        WebClient client = new WebClient();
        client.getOptions().setJavaScriptEnabled(false);
        client.getOptions().setCssEnabled(false);
        String URL = "https://rip.ie/deathnotices.php?do=get_deathnotices_pages&iDisplayStart=0&CountyID=" + county + "&DateFrom=" + dateFrom + "&DateTo=" + dateTo;
        RipResponse response = DeathNoticeUtils.convertJsonToResponseObj(URL, RipResponse.class);
        List<DeathNotice> deathNoticeList = new ArrayList<>();
        for(int i = 0; i < response.getAaData().size(); i++) {
            String[] responseAAData = response.getAaData().get(i);
            DeathNotice notice = searchDeathNoticeText(client, responseAAData, county, searchText);
            if(notice != null && !"".equalsIgnoreCase(notice.getDeathNoticeLink())) {
                deathNoticeList.add(notice);
            }
        }
        client.close();
        return deathNoticeList;
    }
    public URL constructDeathNoticeURL(String[] aaData) throws MalformedURLException {
        String personURL = baseDeathNoticeURL + aaData[7].toLowerCase() +
                "-" +
                aaData[0].toLowerCase() +
                "-" +
                aaData[1].toLowerCase() +
                "-" +
                aaData[2].toLowerCase() +
                "/" +
                aaData[5].toLowerCase();
        return new URL(personURL);
    }
    public DeathNotice searchDeathNoticeText(WebClient client, String[] responseAAData, String county, String searchText) throws IOException {
        URL deathNoticeURL = constructDeathNoticeURL(responseAAData);
        HtmlPage personPage = client.getPage(deathNoticeURL.toString());
        AtomicReference<DeathNotice> detail = new AtomicReference<>();
        List<DomElement> paragraphs = personPage.getElementsByTagName("p");
        paragraphs.forEach(element -> {
            if(element.getTextContent().toLowerCase().contains(searchText.toLowerCase())) {
                detail.set(createDeathNotice(responseAAData, deathNoticeURL.toString(), county, searchText));
            }
        });
        return detail.get();
    }
    private DeathNotice createDeathNotice(String[] responseAAData, String link, String searchText, String county) {
        return new DeathNotice(responseAAData[7] + " " + responseAAData[0], link, searchText, county);
    }
}
