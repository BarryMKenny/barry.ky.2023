package ky.barry.barry.ky3.utils;

import org.springframework.beans.factory.annotation.Value;

import java.io.File;

public class FileSystemUtils {

    @Value("${filesystem.directory.pictures}")
    private static String picturesDirectory;

    public static File[] addPicturesToList() {
        File folder = new File("F:\\workspace\\pictures");
        File[] listOfFiles = folder.listFiles();
        assert listOfFiles != null;
        for (File listOfFile : listOfFiles) {
            if (listOfFile.isFile()) {
                System.out.println("File " + listOfFile.getName());
            } else if (listOfFile.isDirectory()) {
                System.out.println("Directory " + listOfFile.getName());
            }
        }
        return listOfFiles;
    }
}
